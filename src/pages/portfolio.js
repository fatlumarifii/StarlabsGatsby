import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import SubMenu from "../components/subMenu"
import PortfolioCard from "../components/portfolioCard"
import image1 from "../images/grids/img1.jpg"
import image2 from "../images/grids/img2.jpg"
import image3 from "../images/grids/img3.jpg"
import image4 from "../images/grids/img4.jpg"
import image5 from "../images/grids/img5.jpg"
import image6 from "../images/grids/img6.jpg"
import image7 from "../images/grids/img7.jpg"
import image8 from "../images/grids/img8.jpg"
import Buttoni from "../components/button"

export default () => {
  return (
    <Layout>
      <div id="templatemo_portfolio" className="section2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Title
                title={"OUR PORTFOLIO"}
                desc={
                  "Nam scelerisque dui ultricies mollis interdum. Aenean at lectus quis risus pretium placerat. Sed consectetur bibendum pharetra. Mauris tincidunt a augue nec porta. Fusce porttitor leo est, id convallis erat pretium sed.\n" +
                  "\n"
                }
              />
              <div className="glView">
                <div className="switcher">
                  <ul>
                    <li id="grid" className="grid">
                      <i className="fa fa-th-large"></i>
                    </li>
                    <li id="list" className="list">
                      <i className="fa fa-align-justify"></i>
                    </li>
                  </ul>
                </div>
                <SubMenu
                  menuItem={[
                    "All",
                    "Web Design",
                    "Graphic",
                    "Inspiration",
                    "Creative",
                  ]}
                />
                <div className="imgSwitch">
                  <div className="row">
                    <PortfolioCard
                      image={image1}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image2}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image3}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image4}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image5}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image6}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image7}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                    <PortfolioCard
                      image={image8}
                      title={"The Blue Gate"}
                      type={"Graphics"}
                    />
                  </div>
                  <Buttoni text={"Load More"} classNames={"btn btn-primary"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
