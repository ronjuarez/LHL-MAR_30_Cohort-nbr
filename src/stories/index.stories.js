import React from 'react';
import { storiesOf } from '@storybook/react';
import  Leaderboard  from '../components/Leaderboard/index'
import Pointsbutton from '../components/Leaderboard/PointsButton'
import { action } from "@storybook/addon-actions";
import Header from '../components/Leaderboard/Header'
import LeaderboardList from '../components/Leaderboard/LeaderboardList';
import RequestListItem from '../components/Request/RequestListItem';
import AcceptButton from '../components/Request/AcceptButton';
import RequestList from '../components/Request/RequestList';
import NewRequest from '../components/Request/NewRequest';
import Groceries from '../components/Request/Groceries';
import GroceryButton from '../components/Request/GroceryButton';
import TaskCompleted from '../components/Task/TaskCompleted';
import Task from '../components/Task/index';
import Profile from '../components/Profile/index';
import SignIn from '../components/SignIn';

storiesOf('Leaderboard', module)
	.add( 'Volunteer panel', () => <Leaderboard/>)
	.add('Button', () => <Pointsbutton>Highest Points</Pointsbutton>)
	.add('Header', () => <Header/>)
	.add('Leaderboard List', () => <LeaderboardList/>)

storiesOf('Request', module)
	.add('RequestListItem', () => <RequestListItem />)
	.add('AcceptButton', () => <AcceptButton />)
	.add('RequestList', () => <RequestList />)
	.add("NewRequest", () => <NewRequest/>)
	.add("GroceryButton", () => <GroceryButton onClick={action("button-clicked")}/>)

storiesOf('Task', module)
	.add("Task", () => <Task/>)
	.add("TaskCompleted", () => <TaskCompleted/>)

storiesOf('Profile', module)
	.add("Profile", () => <Profile/>)
	
storiesOf('SignIn', module)	
	.add("SignIn", () => <SignIn/> )