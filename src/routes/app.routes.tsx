import * as NavigationBar from 'expo-navigation-bar';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// hooks
import { useTheme } from '@src/hooks/useTheme';
// context
import { TransactionsProvider } from '@src/contexts/TransactionsContext';
// components
import { Icon } from '@src/components/default';
import { addTransition } from '@src/components/animations/ScreenTransition';
// screens
import { Home } from '@src/screens/app/home/Home';
import { TransactionList } from '@src/screens/app/transaction/TransactionList';

// ----------------------------------------------------------------------

type RootParamList = {
  Home: undefined;
  TransactionList: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<RootParamList, 'Home'>;
export type TransactionListScreenProps = BottomTabScreenProps<RootParamList, 'TransactionList'>;

// ----------------------------------------------------------------------

export function AppRoutes() {
  const theme = useTheme();
  const Tab = createBottomTabNavigator<RootParamList>();

  NavigationBar.setBackgroundColorAsync(theme.palette.background.paper);

  return (
    <TransactionsProvider>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          //
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.palette.text.primary,
          tabBarInactiveTintColor: theme.palette.text.faded,
          tabBarStyle: {
            height: 58,
            borderTopWidth: 0,
            backgroundColor: theme.palette.background.paper,
          },
        }}
        sceneContainerStyle={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Tab.Screen
          name="Home"
          component={addTransition(Home)}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="home" color={color} size={34} />;
            },
          }}
        />

        <Tab.Screen
          name="TransactionList"
          component={addTransition(TransactionList)}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="sync" color={color} size={34} />;
            },
          }}
        />
      </Tab.Navigator>
    </TransactionsProvider>
  );
}
