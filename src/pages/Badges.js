import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '1',
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '2',
            name: "Leia Organa", 
            height: "150", 
            mass: "49", 
            hair_color: "brown", 
            skin_color: "light", 
            eye_color: "brown", 
            birth_year: "19BBY", 
            gender: "female",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-leia-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '3',
            name: "Darth Vader", 
            height: "202", 
            mass: "136", 
            hair_color: "none", 
            skin_color: "white", 
            eye_color: "yellow", 
            birth_year: "41.9BBY", 
            gender: "male", 
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-darth-vader-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '4',
            name: "Han Solo",
            height: "180",
            mass: "80",
            hair_color: "brown",
            skin_color: "fair",
            eye_color: "brown",
            birth_year: "29BBY",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-han-solo-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '5',
            name: "Palpatine",
            height: "170",
            mass: "75",
            hair_color: "grey",
            skin_color: "pale",
            eye_color: "yellow",
            birth_year: "82BBY",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-emperor-palpatine-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '6',
            name: "Obi-Wan Kenobi",
            height: "182",
            mass: "77",
            hair_color: "auburn, white",
            skin_color: "fair",
            eye_color: "blue-gray",
            birth_year: "57BBY",
            gender: "male",
            avatarUrl:
              'https://i.pinimg.com/originals/9f/0c/98/9f0c98f7581745628cad505f7748d186.jpg',
          },
          {
            id: '7',
            name: "Chewbacca",
            height: "228",
            mass: "112",
            hair_color: "brown",
            skin_color: "unknown",
            eye_color: "blue",
            birth_year: "200BB",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-chewie-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '8',
            name: "Yoda",
            height: "66",
            mass: "17",
            hair_color: "white",
            skin_color: "green",
            eye_color: "brown",
            birth_year: "896BBY",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-yoda-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '9',
            name: "Boba Fett",
            height: "183",
            mass: "78.2",
            hair_color: "black",
            skin_color: "fair",
            eye_color: "brown",
            birth_year: "31.5BBY",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-boba-fett-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
          {
            id: '10',
            name: "Lando Calrissian",
            height: "177",
            mass: "79",
            hair_color: "black",
            skin_color: "dark",
            eye_color: "brown",
            birth_year: "31BBY",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-lando-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
        ],
      });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <br/>
        <br />
        <br />
        <br />

        <div className="Badges__container">
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
