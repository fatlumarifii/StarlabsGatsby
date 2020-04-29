import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ServiceCard from "../components/serviceCard"

export default () => {
  return (
    <Layout>
      <div id="templatemo_services" className="section1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Title
                title={"Our Services"}
                desc={
                  "Powerful is a responsive web template built on Bootstrap framework. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                }
              />
              <div className="row">
                <ServiceCard
                  text={
                    "Pellentesque nec dui vel risus dignissim congue id vel diam. Vestibulum vestibulum orci at sodales tincidunt." +
                    "Aliquam erat volutpat. Aliquam fringilla quis risus quis porttitor. Cras eu faucibus purus."
                  }
                  title={"Web Design"}
                  icon={"fa fa-bell"}
                />
                <ServiceCard
                  text={
                    "Pellentesque nec dui vel risus dignissim congue id vel diam. Vestibulum vestibulum orci at sodales tincidunt." +
                    " Aliquam erat volutpat. Aliquam fringilla quis risus quis porttitor. Cras eu faucibus purus."
                  }
                  title={"Pixel Perfect"}
                  icon={"fa fa-rocket"}
                />
                <ServiceCard
                  text={
                    "Cras aliquet, lorem et congue eleifend, eros orci eleifend nibh, sit amet pharetra leo justo ut lorem. " +
                    "Pellentesque sed dignissim odio, nec aliquam urna. Praesent sed nulla vitae libero convallis pharetra."
                  }
                  title={"Mobile Ready"}
                  icon={"fa fa-phone"}
                />
                <ServiceCard
                  text={
                    "Donec pretium odio porttitor nisl imperdiet, vel sollicitudin nisl ultricies. Nulla tincidunt fringilla velit at iaculis. " +
                    "Aenean hendrerit placerat risus, sit amet facilisis quam tempus id. Sed facilisis iaculis dictum."
                  }
                  title={"High Quality"}
                  icon={"fa fa-tags"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
