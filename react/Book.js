import React from 'react'
import HTMLFlipBook from "react-pageflip";
import '/App.css';


function Book() {

  const Data = [
    {
      date: "DD/MM/YY",
      description: "Haha Heidelberg gewinnt 2025 nicht gold für wiki"
    },
    {
      date: "DD/MM/YY",
      description: "bin web developer what can i say"
    },
    {
      date: "DD/MM/YY",
      description: "XYZ"
    },
    {
      date: "DD/MM/YY",
      description: "XYZ"
    },
    {
      date: "DD/MM/YY",
      description: "XYZ"
    },
    {
      date: "DD/MM/YY",
      description: "XYZ"
    }
  ];

  return (
  <div className="notebook">
    <HTMLFlipBook
      width={400}
      height={566}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
  {/* Front cover */}
        <div className="page">
          <div className="front-cover">
            <img
              src="/assets/LabNotebookFrontcover.png"
              alt="cover"
              className="front-cover"
            />
          </div>
        </div>

        {/* Entries */}
        {Data.map((page, index) => (
          <div className="page" key={index}>
            <div className="page-content">
              <div className="page-body">
                <p className="page-date">{page.date}</p>
                <p className="page-description">{page.description}</p>
              </div>
              <div className="page-number">{index + 1}</div>
            </div>
          </div>
        ))}

        {/* Back cover */}
        <div className="page">
          <div className="back-cover">
            <img
              src="/assets/LabNotebookBackcover.png"
              alt="backcover"
              className="back-cover"
            />
          </div>
        </div>

      </HTMLFlipBook>
    </div>
  );
}

export default Book;