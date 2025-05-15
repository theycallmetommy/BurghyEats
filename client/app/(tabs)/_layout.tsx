import { Tabs } from 'expo-router';
import CustomTabBar from '../../components/customTabBar';

export default function TabLayout() {
    return (
        <Tabs tabBar={ (props) => <CustomTabBar {...props} /> } screenOptions={{headerShown: false, }} />
    )
}