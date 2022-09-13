npm install -g expo-cli
expo init newProject
cd newProject
npm start


button doesn't support styling


Applying type to state
const [courseGoals, setCourseGoals] = useState<string[]>([]);

You also need to be cautious when adding style to a certain property. 
Add it to the <View>, and not the <Text> or similar tags, because otherwise it doesn't show the same on iOS and android!!!

If you want to scroll, you need to makee it happen!!
    -> import ScrollView from React
    -> use it as <ScrollView>
    -> it needs to be inside of the <View> or whatever to keep the same proportions as before
    -> you also have props for scrolling... different ways and stuff.