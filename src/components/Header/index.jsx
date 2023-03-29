
import { createStyles, Header, Navbar, Text, Group } from '@mantine/core';
import {Link, useNavigate} from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[8],
    color: theme.colors.gray[0],
    width: '100%',
    height: '100%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,

  },
  h1: {
    // color: theme.colors.gray[9],
    backgroundColor: theme.colors.blue[8],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }

}))

const AppHeader = ({ incomplete,showHomeTab }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  }

  const handleHomeClick = () => {
    navigate('/');
  }




  return (
    <Header data-testid="todo-header">
      <Group>
       
          <Link className={classes.link} to="/">Home</Link>
      
        <Link className={classes.link} to="/settings" onClick={handleSettingsClick}>Settings</Link>
      </Group>
    </Header>
    
  )
}

export default AppHeader