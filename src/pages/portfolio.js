import React, { useState } from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import PortfolioCard from "../components/portfolioCard"
import products from "../content/products.json"

export default () => {
  const [itemType, setItemType] = useState("all")
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
                <div className="menuSwitch">
                  <ul>
                    <li
                      category="prod-cnt"
                      onClick={() => setItemType("all")}
                      className={itemType === "all" ? "cat-active" : ""}
                    >
                      All
                    </li>
                    <li
                      category="webdesign"
                      onClick={() => setItemType("Webdesign")}
                      className={itemType === "Webdesign" ? "cat-active" : ""}
                    >
                      Webdesign
                    </li>
                    <li
                      category="graphic"
                      onClick={() => setItemType("Graphic")}
                      className={itemType === "Graphic" ? "cat-active" : ""}
                    >
                      Graphic
                    </li>
                    <li
                      category="inspiration"
                      onClick={() => setItemType("Inspiration")}
                      className={itemType === "Inspiration" ? "cat-active" : ""}
                    >
                      Inspiration
                    </li>
                    <li
                      category="creative"
                      onClick={() => setItemType("Creative")}
                      className={itemType === "Creative" ? "cat-active" : ""}
                    >
                      Creative
                    </li>
                  </ul>
                </div>
                <div className="imgSwitch">
                  <div className="row">
                    {products.map((item, key) => {
                      return itemType === "all" || item.type === itemType ? (
                        <PortfolioCard
                          key={key}
                          image={item.image}
                          title={item.title}
                          type={item.type}
                        />
                      ) : (
                        <></>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
