import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogDetails from "../../page/BlogDetails/BlogDetails";
import BlogPosts from "../../page/BlogPosts/BlogPosts";
import LoginPage from "../../page/Login/Login";
import { RootStackParamList } from "./navigationParams";
import BlogEdit from "../../page/BlogEdit/BlogEdit";
import BlogNew from "../../page/BlogNew/BlogNew";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Posts"
          component={BlogPosts}
          options={{
            title: "Blog posts",
            headerStyle: {
              backgroundColor: "#B65EFF",
            },
            headerTintColor: "#fff",
            // headerBackVisible: false,
            headerBackTitle: "Log out",
          }}
        />
        <Stack.Screen
          name="Details"
          component={BlogDetails}
          options={{
            title: "Blog details",
            headerStyle: {
              backgroundColor: "#B65EFF",
            },
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="New"
          component={BlogNew}
          options={{
            title: "Blog new",
            headerStyle: {
              backgroundColor: "#B65EFF",
            },
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Edit"
          component={BlogEdit}
          options={{
            title: "Blog edit",
            headerStyle: {
              backgroundColor: "#B65EFF",
            },
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
