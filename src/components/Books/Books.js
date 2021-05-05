import './Books.scss';
import { importAll } from "../../utilities"
import { BOOKS } from "../../constants"

function Books() {
  const coverImages = importAll(require.context('../../imgs/bookCovers', false, /\.jpg/));
  return (
    <div className="books">
      <div className="bookHeadingContainer">
        <p className="bookHeadingText">
          Since the beginning of the pandemic in 2020, I've been lucky enough to have the time and resources to get obnoxiously into reading.
          Here are the things I liked:
        </p>
      </div>
      <div className="mainBookContent">
        {
          BOOKS.reverse().map((book, idx) => {
            let parts = book.split("|");
            let imgName = parts[0].replace(/ /g,"") + ".jpg";
            return (<div key={idx} className="bookContainer">
                      <img className="coverImage" src={coverImages[imgName].default} alt={imgName} />
                      <p className="coverDescription"><em className="bookTitle">{parts[0]}</em> by {parts[1]}</p>
                    </div>
            );
          })
        }
      </div>
    </div>
  );
}


export default Books;
