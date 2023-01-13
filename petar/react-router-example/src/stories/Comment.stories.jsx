import Comment from '../components/Comment'
import '../App.css'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blog/Comment',
  component: Comment,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div style={{width: '100vw'}}><Comment {...args} /></div>;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    email: 'qwe@qwe.qwe',
    name: 'petar vukmanovic'
  },
};