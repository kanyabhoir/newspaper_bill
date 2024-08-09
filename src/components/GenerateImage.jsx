import { toJpeg, toPng } from "html-to-image";

const GenerateImage = ({
  name,
  month,
  date,
  googlePay,
  balance,
  total,
  selectedNewspapers,
}) => {
  const handleDownloadPng = () => {
    const node = document.getElementById("image-content");
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "download.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Oops, something went wrong!", error);
      });
  };

  const handleDownloadJpeg = () => {
    const node = document.getElementById("image-content");
    toJpeg(node, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "download.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Oops, something went wrong!", error);
      });
  };
  return (
    <div>
      <div
        style={{ padding: 10, border: "2px solid #121212", background: "#d5dff0" }}
        id="image-content"
      >
        <div
          style={{ padding: 10, border: "2px solid #eee7e7", background: "#cfd4de" }}
        >
          <div style={{ border: "2px solid black", background: "#fff" }}>
            <header>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontWeight: "Bold",
                    textAlign: "center",
                    fontSize: 12,
                    marginTop: 5,
                    color: "#000",
                  }}
                >
                  || ओम साई राम ||
                </span>
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 30,
                    fontWeight: "700",
                    color: "#000",
                    textTransform: "uppercase",
                  }}
                >
                  Vijay NewsPepar Agency
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "end",
                    margin: "0px 30px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      marginRight: 30,
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      color: "#000",
                    }}
                  >
                    Contact No.{" "}
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000",
                      marginTop: -5,
                    }}
                  >
                    8850427013
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: "700",
                      color: "#000",
                      marginTop: -5,
                    }}
                  >
                    7262889526
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    height: "10%",
                    marginTop: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      marginLeft: 20,
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      color: "#000",
                    }}
                  >
                    Name -
                  </div>
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      color: "#000",
                      borderBottom: "2px solid #000",
                      marginRight: 20,
                      marginLeft: 5,
                      fontSize: 16,
                    }}
                  >
                    {name}{" "}
                  </div>
                </div>
              </div>
              <hr style={{ border: "1px solid black" }} />
            </header>
            <div
              style={{
                padding: "0px 20px",
                display: "flex",
              }}
            >
              <div style={{ width: "100%" }}>
                <span
                  style={{
                    fontSize: 16,
                    marginRight: 10,
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#000",
                  }}
                >
                  Month - {month}
                </span>
              </div>
              <div style={{ width: "100%" }}>
                <span
                  style={{
                    fontSize: 16,
                    marginRight: 10,
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#000",
                  }}
                >
                  Date - {date}
                </span>
              </div>
            </div>
            <hr style={{ border: "1px solid black" }} />
            <div
              style={{
                display: "flex",
              }}
            >
              <div style={{ width: "100%" }}>
                <span
                  style={{
                    fontSize: 16,
                    marginLeft: 100,
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#000",
                  }}
                >
                  Paper Name
                </span>
              </div>
              <hr
                style={{
                  border: "1px solid black",
                  height: 40,
                  margin: "-8px 0px -8px 0px ",
                  padding: 0,
                  marginLeft: 120,
                }}
              />

              <div style={{ width: "100%" }}>
                <span
                  style={{
                    fontSize: 16,
                    marginRight: 10,
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#000",
                  }}
                >
                  Amount
                </span>
              </div>
            </div>
            <hr style={{ border: "1px solid black" }} />
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {selectedNewspapers.length > 0 && (
                  <div>
                    <ul>
                      {selectedNewspapers.map((item, index) => (
                        <h3 key={index}>
                          {item.newspapers.map((n) => n.label).join(", ")}
                        </h3>
                      ))}
                    </ul>
                  </div>
                )}

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px -10px",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        marginLeft: 20,
                        textAlign: "left",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                        color: "#000",
                        marginTop: 30,
                      }}
                    >
                      Google pay / <br /> Phone Pay
                    </span>
                    <p
                      style={{
                        fontSize: 13,
                        marginLeft: 20,
                        textAlign: "left",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                        color: "#000",
                        width: "100%",
                      }}
                    >
                      {googlePay}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: -120,
                      marginTop: 25,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        marginRight: 20,
                        fontWeight: "bold",
                        textAlign: "right",
                        fontFamily: "sans-serif",
                        color: "#000",
                      }}
                    >
                      Balance
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        marginRight: 20,
                        fontWeight: "bold",
                        textAlign: "right",
                        fontFamily: "sans-serif",
                        color: "#000",
                      }}
                    >
                      Total Amount
                    </p>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  border: "1px solid black",
                  height: "30rem",
                  margin: "-8px 0px -1px 120px ",
                  padding: 0,
                }}
              />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    marginRight: 10,
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    color: "#000",
                  }}
                >
                  {selectedNewspapers.length > 0 && (
                    <div>
                      <ul>
                        {selectedNewspapers.map((item, index) => (
                          <h3 key={index}>₹{item.amount}</h3>
                        ))}
                      </ul>
                    </div>
                  )}
                </span>
                <div>
                  <hr style={{ border: "1px solid black" }} />
                  <p
                    style={{
                      fontSize: 16,
                      marginRight: 10,
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      color: "#000",
                    }}
                  >
                    {" "}
                    {balance}
                  </p>
                  <hr style={{ border: "1px solid black" }} />
                  <p
                    style={{
                      fontSize: 16,
                      marginRight: 10,
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      color: "#000",
                    }}
                  >
                    {" "}
                    {total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff" }}>
          <b>Note :- </b>
          <span>Please send the screen shot on Whatsapp</span>
        </div>
      </div>
      <div>
        <button onClick={handleDownloadPng}>Download as PNG</button>
        <button onClick={handleDownloadJpeg}>Download as JPEG</button>
      </div>
    </div>
  );
};

export default GenerateImage;
