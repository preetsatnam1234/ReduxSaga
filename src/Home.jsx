import React, { useEffect, useState } from "react";
import Cards from "./card/Cards";
import { TextField, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import searchPersonData from "./SearchPersonData";
// import { getUser } from "./reducers/userReducers";
import { taskListRequest } from "./redux/actions/userActions";
const Home = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchItem, setSearchItem] = useState(null);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasklist.tasks.data); 

  console.log(list);
  useEffect(() => {
    dispatch(taskListRequest());
  }, [dispatch]);

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setSearchActive(true);
      setSearchItem(searchPersonData(list, e.target.value));
    } else {
      setSearchActive(false);
    }
  };
  return (
    <>
      <div className="wrapper">
        <header className="header_wrapper">
          <nav className="navbar">
            <h3 className="title">welcome to card gallery</h3>

            <TextField
              label="Search"
              type="text"
              autoComplete="off"
              variant="outlined"
              onKeyUp={handleSearch}
            />
          </nav>
        </header>
        <div className="below-header"></div>
        <div className="main-wrapper">
          <main className="main">
            <Grid
              container
              spacing={10}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {searchActive
                ? searchItem.map((data) => (
                    <Grid item xs={12} sm={6} lg={4}>
                      <Cards
                        name={data.name}
                        img={data.image}
                        id={data.id}
                        key={data.id}
                        description={data.description}
                      />
                    </Grid>
                  ))
                : list &&
                  list.map((data) => (
                    <Grid item xs={12} sm={6} lg={4}>
                      <Cards
                        name={data.name}
                        img={data.image}
                        id={data.id}
                        key={data.id}
                        description={data.description}
                      />
                    </Grid>
                  ))}
            </Grid>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
