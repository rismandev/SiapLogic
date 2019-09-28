// Using React Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

// Import All Screen or Activity
import Main from '../app'
import Fibonacci from '../app/Fibonacci'
import Anagram from '../app/Anagram'
import Permutation from '../app/Permutation'

// Create Route Stack
export default Route = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main
    },
    Fibonacci: {
      screen: Fibonacci
    },
    Anagram: {
      screen: Anagram
    },
    Permutation: {
      screen: Permutation
    }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  })
)
