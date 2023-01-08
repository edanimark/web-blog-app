import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, FlatList, Pressable, Text } from "native-base";
import { Heading } from "native-base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { blogPostsType } from "../../types/types";
import { getBlogPosts } from "./store/selectors";
import { fetchBlogPostsAction } from "./store/slice";

type Props = NativeStackScreenProps<RootStackParamList, "Posts">;

export const BlogPosts = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const listData = useSelector(getBlogPosts);

  const [data, setListData] = useState<blogPostsType[] | null>(null);

  useEffect(() => {
    dispatch(fetchBlogPostsAction({}));
  }, []);

  useEffect(() => {
    if (listData) {
      setListData(listData.data);
    }
  }, [listData]);

  return (
    <Box style={{ backgroundColor: "lightgray" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Details", { id: item.id })}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="#B65EFF"
            maxW="100%"
            bg="coolGray.100"
            p="5"
            m="5"
          >
            <Box>
              <Heading>{item.title}</Heading>
              <Text>{item.shortDescription}</Text>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Box>
  );
};

export default BlogPosts;
