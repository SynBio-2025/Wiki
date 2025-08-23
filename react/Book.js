import React from 'react'
import HTMLFlipBook from "react-pageflip";
import '../App.css';
import ReactMarkdown from 'react-markdown';


function Book() {

  const Data = [
    {
      date: "09/10/2024",
      names: "Noemi, Anna",
      description:
      `
      Media was made:
       - 500 ml fluid LB medium made and autoclaved
       - 500 ml LB agar made, autoclaved, 0.5 ml Amp100 added and plates poured
       - 100 ml 15% glycerol + 0.1 M CaCl₂ made and autoclaved
       - 100 ml 10% glycerol made and autoclaved
       - 500 ml 2x TY medium made and autoclaved
       - Amp100 stocks made, sterile-filtered
       - Kan50 stocks made, sterile-filtered

       Pre-culture for making of competent E. coli cells:
       - 2x 10 ml 2xTY in 100 ml flasks
       - inoculated with 50 µl E. coli α λ pir each
       - incubated at 37 °C`
    },
    {
    date: "10/10/2024",
    names: "Noemi, Alex",
    description: (
      <>
        <p>Competent E. coli α λ pir made:</p>
        <ul>
        <li> OD of pre-culture: pc1: 10, pc2: 9 </li>
        <li> Main cultures 1&2 inoculated at 11:35 </li>
        <li> Main culture 2 additionally inoculated with 1.5 ml of pre-culture to OD 0.1 at 12:00 </li>
        <li> OD measurements of main cultures: </li>
        </ul>
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', border: '3px solid black', marginLeft: '20px', marginTop: '15px'}}>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}> T1 12:20 </td>
              <td style={{border: '2px solid black'}}> HK1 </td>
              <td style={{border: '2px solid black'}}> 0.02 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}></td>
              <td style={{border: '2px solid black'}}> HK2 </td>
              <td style={{border: '2px solid black'}}> 0.08 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}> T2 13:20 </td>
              <td style={{border: '2px solid black'}}> HK1 </td>
              <td style={{border: '2px solid black'}}> 0.04 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}></td>
              <td style={{border: '2px solid black'}}> HK2 </td>
              <td style={{border: '2px solid black'}}> 0.11 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}> T1 14:20 </td>
              <td style={{border: '2px solid black'}}> HK1 </td>
              <td style={{border: '2px solid black'}}> 0.08 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}></td>
              <td style={{border: '2px solid black'}}> HK2 </td>
              <td style={{border: '2px solid black'}}> 0.17 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}> T1 15:20 </td>
              <td style={{border: '2px solid black'}}> HK1 </td>
              <td style={{border: '2px solid black'}}> 0.21 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}></td>
              <td style={{border: '2px solid black'}}> HK2 </td>
              <td style={{border: '2px solid black'}}> 0.5 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}> T1 15:55 </td>
              <td style={{border: '2px solid black'}}> HK1 </td>
              <td style={{border: '2px solid black'}}> 0.5 </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{border: '2px solid black'}}></td>
              <td style={{border: '2px solid black'}}> HK2 </td>
              <td style={{border: '2px solid black'}}> - </td>
            </tr>
          </tbody>
        </table>
      </>
    )
    },
    {
      description: (
      <>
        <ul>
        <li> Cultivation stopped at OD=0.5 </li>
        <li> Cell suspension transferred into 50 ml falcons </li>
        <li> Centrifuged at 5000 rpm & 4 °C for 10 min </li>
        <li> Supernatant drained </li>
        <li> Resuspended in 15 ml iced CaCl₂ </li>
        <li> Centrifuged again </li>
        <li> Resuspended again </li>
        <li> Centrifuged again </li>
        <li> Resuspended with 2.5 ml CaCl₂ + 15% glycerol each </li>
        </ul>
    </>
    )
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
    },
    {
      date: "DD/MM/YY",
      description: "XYZ"
    }
  ];

   return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <HTMLFlipBook
        width={400}
        height={566}
        size="fixed"
        showCover={true}
        maxShadowOpacity={0.5}
        drawShadow={true}
        mobileScrollSupport={false}
      >
        {/* Front cover */}
        <div className="cover">
          <img
            src="/assets/LabNotebookFrontcover.png"
            alt="Front Cover"
            className="front-cover"
          />
        </div>

        {/* Pages */}
        {Data.map((page, index) => (
  <div className="page" key={index}>
    <div className="page-content">
      {page.date && <p className="page-date">{page.date}</p>}
      {page.names && <p className="page-names">{page.names}</p>}
      <div className="page-description">
        {typeof page.description === 'string' ? (
          page.description.split('\n').map((line, i) => {
            if (line.trim() === '') {
              return <br key={i} />;
            }
            const isBullet = line.trim().startsWith('- ');
            const text = isBullet ? line.trim().slice(2) : line;

            return (
              <p
                key={i}
                style={{
                  textIndent: 0,
                  margin: 0,
                  paddingLeft: isBullet ? '1.2em' : 0,
                  position: 'relative',
                }}
              >
                {isBullet && (
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      fontWeight: 'bold',
                      width: '1em',
                      display: 'inline-block',
                    }}
                  >
                    •
                  </span>
                )}
                {text}
              </p>
            );
          })
        ) : page.description ? (
          // If description is JSX or a React element, render it directly
          page.description
        ) : (
          <p>No description</p>
        )}
      </div>
      <div className="page-number">{index + 1}</div>
    </div>
  </div>
))}

        {/* Back cover */}
        <div className="cover">
          <img
            src="/assets/LabNotebookBackcover.png"
            alt="Back Cover"
            className="back-cover"
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
