import { data } from "./ContactsData"
import Link from 'next/link'




const CardContact = (props) => {
  const first = props.first;
  const last = props.last;
  const company = props.company
  const id = props.id

  return (
    <div className="card bg-light d-flex flex-fill">
      <div className="card-header text-muted border-bottom-0">
        {company}
      </div>
      <div className="card-body pt-0">
        <div className="row">
          <div className="col-7">
            <h2 className="lead"><b>{first} {last}</b></h2>
            <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
            <ul className="ml-4 mb-0 fa-ul text-muted">
              <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Address: Demo Street 123, Demo City 04312, NJ</li>
              <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"> </i></span> Phone #: + 800 - 12 12 23 52</li>
            </ul>
          </div>
          <div className="col-5 text-center">
            <img width={150} height={150} src={"/images/speaker-" + id + ".jpg"} alt="user-avatar" className="img-circle img-fluid" />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="text-right">
          <a href="#" className="btn btn-sm bg-teal">
            <i className="fas fa-comments"></i>
          </a>
          <a href="#" className="btn btn-sm btn-primary">
            <i className="fas fa-user"></i> View Profile
          </a>
        </div>
      </div>
    </div>
  )
}



const Annuaire = () => {
  return (
    <div className="container">

      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Contacts</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <Link className="breadcrumb-item" href="/">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                </Link>
                <Link className="breadcrumb-item" href="/App">
                  <li className="breadcrumb-item active">Contacts</li>
                </Link>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
              {data.map((speaker) => {
                const { id, bio, first, last, favorite, twitterHandle, company, session, } = speaker;
                return (
                  <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" key={id}>
                    <CardContact first={first} last={last} company={company} id={id} />
                  </div>
                )
              })
              }
            </div>
          </div>

          <div className="card-footer">
            <nav aria-label="Contacts Page Navigation">
              <ul className="pagination justify-content-center m-0">
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#">7</a></li>
                <li className="page-item"><a className="page-link" href="#">8</a></li>
              </ul>
            </nav>
          </div>

        </div>

      </section>

      <div className="row" >
        {data.map((speaker) => {
          const { id, bio, first, last, favorite, twitterHandle, company, session, } = speaker;

          return (
            <div key={id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12">
              <div className="card card-height p-4 mt-4">
                <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                  <img className="contain-fit" src={"/images/speaker-" + id + ".jpg"} width="300" height="300" alt={first} />
                </div>
                <div className=''>
                  <div className="d-flex justify-content-between mb-3">
                    <h3 className="text-truncate w-200">
                      {first}  {last} {id}
                    </h3>
                  </div>
                  <div>
                    <p className="">
                      {bio} {company} {twitterHandle} {favorite}
                    </p>
                  </div>
                </div>
                <div className="sessionBox card h-250">
                  <div className='session w-100 '>

                  </div>
                </div>
              </div>
            </div>
          )
        })
        }

      </div>
    </div>
  )
}
export default Annuaire;


