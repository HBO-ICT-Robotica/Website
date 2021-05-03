import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Divider } from '@material-ui/core';
import { useRouter } from 'next/router';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {

  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHome = () => {
    setAnchorEl(null);
    router.push("/");
  };

  const handleProgress = () => {
    setAnchorEl(null);
    router.push("progress");
  };

  const handleMorphologicView = () => {
    setAnchorEl(null);
    router.push("/docs/morphologicView");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleClick} color="inherit" aria-controls="simple-menu" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Game Changers
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleHome}>Home</MenuItem>
            <MenuItem onClick={handleProgress}>Voortgang</MenuItem>
            <MenuItem onClick={handleClose} disabled>Livestream</MenuItem>
            <Divider/>
            <MenuItem onClick={handleMorphologicView}>Morfologisch Overzicht</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab label="Week 1" {...a11yProps(0)} />
          <Tab label="Week 2" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card className={classes.card}>
          <CardMedia
                    component="img"
                    alt="Concepten"
                    image="Concept1.png"
                    title="Concepten"
                    width="auto"
                    height="250vh"
                    border-color="black"
                   />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Concepting
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              In de eerste week zijn wij bezig geweest met het bedenken van concepten. Wij hebben nagedacht over
              op welke manier de robot zich gaat verplaatsen, hoe hij objecten gaat oppakken en on hoe hij er ongeveer
              uit moet komen te zien.
              We hebben hier nagedacht over bijvoorbeeld gewoon wielen eronder zetten, poten of rupsbanden. Ook zijn
              er verschillende manieren bedacht waarop de robot voorwerpen kon oppakken zoals met een grijper met een
              arm eraan of simpelweg een grijper voorop monteren.
              <br/>
              <br/>
              Na het brainstormen hebben wij deze ideeën verder uitgewerkt tot meerdere echte concepten van een gehele robot.
              Deze concepten zijn verder uitgewerkt in ons morfologisch overzicht die ook via deze website inzichtelijk is.
              Uiteindelijk hebben wij hier één ontwerp van gekozen om daadwerkelijk uit te werken als robot.
              Dit betreft een robot met 4 poten waaraan wielen zitten bevestigd. Wij hebben dit gekozen omdat we een robot 
              willen die niet beperkt wordt in bijvoorbeeld dansmogelijkheden doordat hij op rupsbanden of alleen wielen rijdt.
              Ook hopen wij voordeel te halen uit het feit dat we het gewicht van de body kunnen verplaatsen naar eigen voordeel
              om bijvoorbeeld een gat te overbruggen of een helling op te rijden.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
                    component="img"
                    alt="MaatschappelijkDoel"
                    image="Concept2.png"
                    title="Maatschappelijk Doel"
                    width="auto"
                    height="250vh"
                   />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Maatschappelijk Doel
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Wij hebben ook over het maatschappelijke doel van onze robot nagedacht. We hadden ideeën als het
              onderhouden van gemeentetuinen door dode planten/bloemen te herkennen en deze weg te knippen.
              Ook hadden we het idee van een bewakingsrobot die moeilijk te verwijderen verf op een verdachte kan 
              spuiten en een alarm kan af laten gaan.
              Wij hebben er uiteindelijk voor gekozen om een robot te maken die op een tennisbaan, tennisballen aan
              het einde van een wedstrijd weer bij elkaar verzamelt en naar een verzamelpunt brengt. 

              Daarnaast hebben wij mogelijkheden tot extra functionaliteit zoals het herkennen van de lijnen op het veld 
              om zijn locatie te bepalen en misschien zelfs een positie in te schatten waar ballen het vaakst terechtkomen.
              Ook is er de mogelijkheid om de ballen daadwerkelijk terug te geven aan een speler in plaats van deze naar een
              verzamelpunt te brengen om bijvoorbeeld spelers die moeite hebben met ballen oppakken te helpen.
              <br/>
              <br/>
              Al met al dus opties genoeg, we hebben er alleen voor gekozen om het eerst wat meer basic te houden omdat wij
              nu eenmaal met een deadline over 8 weken zitten waardoor de tijd relatief beperkt is.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card className={classes.card}>
          <CardMedia
                    component="img"
                    alt="Designbrief"
                    image="Concept3.png"
                    title="Designbrief"
                    width="auto"
                    height="250vh"
                    border-color="black"
                   />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Designbrief
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Aan het begin van deze week hadden wij de presentatie van onze designbrief.
                Hier hebben wij ons maatschappelijk doel gepresenteerd en hebben wij tips gekregen 
                met betrekking tot dit maatschappelijk doel.
                De docenten vonden ons idee leuk bedacht en raadden ons aan om goed na te denken over bijvoorbeeld
                de robuustheid van de robot omdat er dus ballen met hoge snelheid tegenaan kunnen vliegen maar ook
                tips om bijvoorbeeld contact op te nemen met een tennisclub voor tips en feedback.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
                    component="img"
                    alt="Hardware"
                    image="Concept4.png"
                    title="Hardware"
                    width="auto"
                    height="250vh"
                   />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hardware
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Wij hebben ons robot idee verder uitgewerkt in een 3d ontwerp en WTB is begonnen met de
                berekeningen om onder andere een motor die krachtig en snel genoeg is uit te kunnen zoeken. 
                Verder hebben wij verschillende soorten tandwielen ontworpen en met de 3d printer uitgeprint om
                deze te kunnen testen en controleren of de 3d printer doet wat hij moet doen.
                Ook hebben wij deze week bijpassende motoren besteld zodat wij die zo snel mogelijk kunnen
                gaan testen en aan de poten kunnen beginnen.
                <br/>
                <br/>
                Elektrotechniek heeft deze week hard gewerkt aan het maken van de afstandsbediening waarmee de robot bestuurd
                gaat worden. Hier moest bijvoorbeeld een scherm op worden gemonteerd waarop data weergeven kan worden 
                zoals sensordata of batterijduur. Ook zijn ze druk geweest met het maken van de controler vanuit waar alle componenten
                van de robot aangestuurd moeten worden. 
                
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>
    </div>
  );
}
