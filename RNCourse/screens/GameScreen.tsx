import {
    StyleSheet,
    View,
    useWindowDimensions,
    Alert,
    FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title.ios";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

interface IProps {
    userNumber: number;
    onGameOver: (num: number) => void;
}

//excluded number is the one that is typed in by the user
const generateRandomBetween = (
    min: number,
    max: number,
    exclude: number
): number => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary: number = 1;
let maxBoundary: number = 100;

const GameScreen = ({ userNumber, onGameOver }: IProps) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    // we make sure that this is executed only the first time
    useEffect(() => {
        (minBoundary = 1), (maxBoundary = 100);
    }, []);

    const nextGuessHandler = (direction: string) => {
        if (
            (direction == "lower" && currentGuess < userNumber) ||
            (direction == "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", " You know this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }

        if (direction == "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNum);
        setGuessRounds((prevGuessRounds) => [newRndNum, ...prevGuessRounds]);
    };

    const guessRoundsListLength = guessRounds.length;
    let content = (
        //fragment tag is because of the two root components NumberContainer and Card
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                {/* basically, the InstructionText components receives some styles, but you can simply override them with adding them classically*/}
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "greater")}
                        >
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
                {/*   + -   */}
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "greater")}
                        >
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            {content}

            {/* it's not such a bad solution for this case, but if the list is long, it's not ideal*/}
            {/* <View>{guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}</View>*/}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item: number) => item.toString()}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
    buttonsContainerWide: {
        flexDirection: "row",
        alignItems: "center",
    },
});
