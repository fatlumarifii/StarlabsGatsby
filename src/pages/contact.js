import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Map from "../components/map"
import ContactCard from "../components/contactCard"

export default () => {
  return (
    <Layout>
      <div id="templatemo_about" className="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Title
                title={"CONTACT US"}
                decs={
                  "Pellentesque aliquam in risus eu ultrices. Suspendisse id interdum nibh. Etiam vel mattis augue, a vestibulum arcu. " +
                  "Nam rutrum diam dolor, eu vehicula nisl tincidunt non. Fusce tincidunt id justo eu tempor. Phasellus sit amet ante " +
                  "lobortis, mattis sapien id, dictum ipsum"
                }
              />
              <Map
                url={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12084.143170610365!2d-73.96770330299584!3d40." +
                  "783227259584116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral+" +
                  "Park!5e0!3m2!1sen!2s!4v1391601567888"
                }
              />
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
