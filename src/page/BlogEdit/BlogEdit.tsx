import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box } from "native-base";
import { BlogPostForm } from "../../components/blogPostForm/blogPostForm";
import { RootStackParamList } from "../../components/navigation/navigationParams";

type Props = NativeStackScreenProps<RootStackParamList, "Edit">;

export const BlogEdit = ({ navigation, route }: Props) => {
  return (
    <Box>
      <BlogPostForm navigation={navigation} route={route} />
    </Box>
  );
};

export default BlogEdit;
