import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box } from "native-base";
import { BlogPostForm } from "../../components/blogPostForm/blogPostForm";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { style } from "../../style/global";

type Props = NativeStackScreenProps<RootStackParamList, "New">;

export const BlogEdit = ({ navigation, route }: Props) => {
  return (
    <Box style={style.pageContainer}>
      <BlogPostForm navigation={navigation} route={route} />
    </Box>
  );
};

export default BlogEdit;