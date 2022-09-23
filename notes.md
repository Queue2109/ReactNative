npm install -g expo-cli
expo init newProject
cd newProject
npm start


button doesn't support styling


Applying type to state
const [courseGoals, setCourseGoals] = useState<string[]>([]);

You also need to be cautious when adding style to a certain property. 
Add it to the <View>, and not the <Text> or similar tags, because otherwise it doesn't show the same on iOS and android!!!

If you want to scroll, you need to make it happen!!
    -> import ScrollView from React
    -> use it as <ScrollView>
    -> it needs to be inside of the <View> or whatever to keep the same proportions as before
    -> you also have props for scrolling... different ways and stuff.

For long lists we tipically don't use scrolling
instead: vertical scrolling... flat list

Be careful with types! Make interfaces and also in the future, put interfaces in a new file to be more organized!

Adding components:
    -> into a folder named "components"
    -> you need to import it in the main App.tsx ... import GoalItem  from "./components/GoalItem";
    -> separate StyleSheet... to be more organised

IMAGE INSERTON:
you don't input the link to the location of the image, but you should do it as"
require('pathToImage')

APP.JSON:
if you want for a style to appear on all of the pages of your app, add them to the
expo compartment in this file (app.json)

react devtools -> install them some day, it is useful because it shows the tree of components and it's a nice to have feature

Every phone has a different structure, some of them have a notch on top off the screen. We want to respect that and do the styles like that alwaysssssss. 
In app.tsx import SafeAreaView

to download fonts:
expo install expo-font

to download so that the screen is loading until the font is ready
expo install expo-app-loading

FLATLIST:
<FlatList data={guessRounds} renderItem={(itemData) => <Text>{itemData.item}</Text>}  keyExtractor={(item: number) => item.toString()/>

USE INTERFACES!!!!

STYLING THE APP
there's a lot of different phone sizes - don't hardcode heights, widths and similar things into the style containers.  
instead import the Dimensions API from react-native and get every phone's width/height of a screen/window, and than go from there:
const deviceWidth = Dimensions.get('window').width;
borderRadius: deviceWidth < 380 ? 75 : 150,
width: deviceWidth < 380 ? 150 : 300,
height: deviceWidth < 380 ? 150 : 300,




