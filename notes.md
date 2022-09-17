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
