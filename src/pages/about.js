import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import InfoText from "../components/infoText"
import Knob from "../components/knob"
import AboutCard from "../components/aboutCard"
import JSONData from "../content/about.json"

export default () => {
  return (
    <Layout>
      <div id="templatemo_about" className="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Title
                title={"Our Team"}
                desc={
                  "Etiam ornare lectus quis urna cursus eleifend et nec nisl. Etiam porta, ante commodo facilisis blandit, magna ipsum elementum " +
                  "ligula, et dapibus purus nibh ut tellus. Vivamus justo nisi, ornare id lobortis non, cursus in enim."
                }
              />
              <div className="knobWrap">
                <div className="row">
                  <Knob
                    number={"75"}
                    className={"c100 p75 big"}
                    text={"HTML/CSS"}
                  />
                  <Knob
                    number={"90"}
                    className={"c100 p90 big"}
                    text={"GRAPHICS"}
                  />
                  <Knob
                    number={"66"}
                    className={"c100 p66 big"}
                    text={"MEDIA"}
                  />
                  <Knob
                    number={"85"}
                    className={"c100 p85 big"}
                    text={"MARKETING"}
                  />
                </div>
              </div>
              <InfoText
                text={
                  "This is a website for everyone. Cras eu faucibus purus." +
                  " Duis ultricies leo sit amet nibh luctus feugiat. Pellentesque aliquam in risus eu ultrices. Suspendisse id interdum nibh." +
                  " Etiam vel mattis augue, a vestibulum arcu. Nam rutrum diam dolor, eu vehicula nisl tincidunt non. Fusce tincidunt id justo eu tempor. " +
                  "Phasellus sit amet ante lobortis, mattis sapien id, dictum ipsum. " +
                  "Integer blandit mollis neque, aliquam laoreet libero vulputate nec. Sed malesuada laoreet lorem, eu mollis ipsum viverra ut."
                }
              />
              <div className="teamInfo">
                <ul>
                  {JSONData.map((data, index) => {
                    return (
                      <AboutCard
                        image={data.image}
                        name={data.name}
                        prof={data.prof}
                        key={`content_item_${index}`}
                      />
                    )
                  })}
                </ul>
              </div>
              <InfoText
                text={
                  "Praesent sed mi luctus nulla malesuada mattis. Nunc dictum arcu nisi, ac sodales velit dapibus eu. " +
                  "Curabitur ut erat eu ante adipiscing adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;" +
                  " Integer rutrum tortor tellus, ac porta erat volutpat tincidunt. Maecenas porttitor eleifend euismod." +
                  " Duis varius varius mauris, a ornare neque sagittis non. Nulla eget enim ultricies, elementum ipsum dignissim, sagittis justo."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
