import styled  from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import  { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase1";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/users/userSlice";
import { getDocs } from "firebase/firestore/lite";
import { colMovie } from "../firebase1";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];
    getDocs(colMovie).then((snapshot) => {
      // eslint-disable-next-line array-callback-return
      snapshot.docs.map((doc) => {
        // console.log(recommends);
        // eslint-disable-next-line default-case
        switch (doc.data().type) {
          case "recommend":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trendings,
          })
        );
      });
    }, [userName]);
  });

  return (
      <Container>
          <ImgSlider />
          <Viewers />
          <Recommends />
          <NewDisney />
          <Originals />
          <Trending />
      </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;