import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Container, Divider, Grid } from '@material-ui/core';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import { useRouter } from 'next/router';
import Header from '../components/header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
  },
  body: {
	
  },
  CardHeader: {

  }
}));

export default function ButtonAppBar() {
  const router = useRouter();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProgress = () => {
    setAnchorEl(null);
    router.push("progress");
  };

  const handleHome = () => {
    setAnchorEl(null);
    router.push("/");
  };

	const handleMorphologicView = () => {
    setAnchorEl(null);
    router.push("/docs/morphologicView");
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
	  <>
    <div className={classes.root}>
      <Header></Header>
	  </div>
	  <Box mt="3vh"/>
	  <Container maxWidth="xl">
	  <Grid container className={classes.body} spacing={4} justify="center" alignItems="stretch">
	  <Grid item xs={12} md={4}>
	  <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="AfbeeldingNHL"
          image="NHLStenden.png"
          title="NHLStenden"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In de vierde periode van het tweede jaar staat voor onze opleidingen Elektrotechniek, ICT en Werktuigbouwkunde, 
            het thema robotica centraal. Tijdens deze periode werken wij aan een robot die aan verschillende eisen moet voldoen.
            Zo moet hij in de basis bijvoorbeeld een trap op kunnen komen en een gat kunnen overbruggen.  
           <br></br>
           <br></br>
            Uiteindelijk is het de bedoeling dat wij met onze robot gaan deelnemen aan een wedstrijddag waarop wij tegen robots 
            van andere teams gaan strijden. Onderdelen van de wedstrijd zijn een race, een danswedstrijd en een obstacle course.
          </Typography>
        </CardContent>
    </Card>
    </Grid>
	<Grid item xs={12} md={4}>
	  <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="AfbeeldingRobot"
          image="Robot3D.png"
          title="Robot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Concept 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Het is de bedoeling dat onze robot 4 poten met daaraan wielen gaat krijgen.
            Met de wielen hopen wij de robot meer snelheid te kunnen geven en met de poten
            heeft hij de mogelijkheid om zich flexibel te bewegen.
            Wij hebben dit gedaan zodat de robot meer bewegingsmogelijkheden heeft tijdens de 
            danswedstrijd maar ook zodat het zwaartepunt aangepast kan worden.
            Het aanpassen van het zwaartepunt kan voordelen hebben bij bijvoorbeeld de hellingproef
            en het overbruggen van een gat. 
          </Typography>
          <br></br>
          <Typography gutterBottom variant="h6">
            Maatschappelijk Doel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Onze robot heeft als maatschappelijk doel het oprapen van tennisballen om deze vervolgens
            te vervoeren naar een verzamelbak. Hiermee willen wij tennissers helpen om het veld op te 
            vrij te houden zodat zij niet naar elk potje tennis eerst weer alle ballen zelf bij elkaar moeten
            zoeken.
          </Typography>
        </CardContent>
    </Card>
    </Grid>
	<Grid item xs={12} md={4}>
	  <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Groepsfoto"
          image="Groepsfoto.jpeg"
          title="Groepsfoto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Groep
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Wij zijn een super gemotiveerd en divers team, wij hopen met onze robot heel 
              ver te komen in de wedstrijd en misschien zelfs de eerste prijs te winnen.
          </Typography>
          <br></br>
          <Typography variant="body2" color="textSecondary" component="p">
            Onze groep bestaat uit 10 leden waaronder 3 studenten van werktuigbouwkunde,
            2 studenten Elektrotechniek en 5 studenten ICT.
          </Typography>
          <br></br>
          <Typography gutterBottom variant="h6" component="h2">
           <BuildIcon/> Werktuigbouwkunde
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Annika, Elin en Rick
          </Typography>
          <br></br>
          <Typography gutterBottom variant="h6" component="h2">
          <BatteryChargingFullIcon/> Elektrotechniek
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Boas en Laurence
          </Typography>
          <br></br>
          <Typography gutterBottom variant="h6" component="h2">
          <ComputerIcon/>  ICT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Berber, Justin, Nyk, Maren en Ryan
          </Typography>
          <br></br>
        </CardContent>
    </Card>
    </Grid>
	</Grid>
	</Container>
	</>
  );
}