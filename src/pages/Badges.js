import React, {Suspense, lazy} from 'react';

import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';

const Loading = lazy(()=>import('../components/PageLoading'));

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor');

    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
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
          {
            id: '11',
            name: "C-3PO",
            height: "167",
            mass: "75",
            hair_color: "n/a",
            skin_color: "gold",
            eye_color: "yellow",
            birth_year: "112BBY",
            gender: "n/a",
            avatarUrl:
              'https://staticdelivery.nexusmods.com/mods/2229/images/thumbnails/4170/4170-1599160324-758762030.png',
          },
          {
            id: '12',
            name: "R2-D2",
            height: "96",
            mass: "32",
            hair_color: "n/a",
            skin_color: "white, blue",
            eye_color: "black",
            birth_year: "33BBY",
            gender: "n/a",
            avatarUrl:
              'https://i.pinimg.com/originals/de/5d/0f/de5d0f46e06ea86363335066b88e42c4.jpg',
          },
          {
            id: '13',
            name: "Bossk",
            height: "190",
            mass: "113",
            hair_color: "none",
            skin_color: "green",
            eye_color: "red",
            birth_year: "53BBY",
            gender: "male",
            avatarUrl:
              'https://i.redd.it/816nlmyvskr51.jpg',
          },
          {
            id: '14',
            name: "Grievous",
            height: "216",
            mass: "159",
            hair_color: "none",
            skin_color: "brown, white",
            eye_color: "green, yellow",
            birth_yea: "unknown",
            gender: "male",
            avatarUrl:
              'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-grievous-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
          },
        ],
      });
    }, 2000);
    setTimeout(() => {
      console.log('loading');
      var loader = document.querySelector('.Loading')
      loader.style.color = "red";
    }, 100);
    setTimeout(() => {
      var loader = document.querySelector('.Loading')
      loader.style.display = "none";
    }, 2000);
  }
  


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate()');
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
    console.log('componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('render()');

    // if (this.state.loading === true) {
    //   return <PageLoading />;
    // }

    return (
      <React.Fragment>
        <br/>
        <br />
        <br />
        <br />

        <div className="Badges__container">
          <h3 className="Loading"><PageLoading /></h3>
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
