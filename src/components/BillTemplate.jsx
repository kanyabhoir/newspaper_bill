import "./BillTemplate.css";
import { useState } from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import GenerateImage from "./GenerateImage";
import Select from "react-select";
import { format } from "date-fns";
import ReloadButton from "./ReloadButton";

const newspaperOptions = [
  "नवभारत",
  "संध्यानंद",
  "सामना",
  "आ.आनंद",
  "पुढारी",
  "साप्ताहिक",
  "The Hindu",
  "साक्षी",
  "नवाकाळ",
  "Mirror",
  "A.B.P.",
  "दिव्य भास्कर",
  "मु. समाचार",
  "तरुण भारत",
  "दैनिक भास्कर",
  "लोकमत",
  "H.T.",
  "सकाळ",
  "delivery bill",
  "F. Press",
  "Eco",
  "Magazine",
  "Patrika",
  "जन्मभूमी",
  "महाराष्ट्र टाइम्स",
  "लोकसत्ता",
  "नवभारत टाइम्स",
  "प्रत:काळ",
  "Mint",
  "finance",
  "Indian Express",
  "Wealth",
  "मुंबई चौफेर",
  "ठाणे वैभव",
  "दिनकरनं",
  "प्रत्यक्ष",
  "गुजरात समाचार",
  "Thanthi",
  "Manorama",
  "Mathrubhumi",
  "Uday Vani",
  "K. Mala",
  "G. Mid day",
  "E. Mid day",
  "B. Standard",
  "B. Line",
  "Times",
].map((name) => ({ label: name, value: name }));

const BillTemplate = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [selectedNewspapers, setSelectedNewspapers] = useState([]);
  const [newspaperList, setNewspaperList] = useState([]);
  const [amount, setAmount] = useState("");

  const handleNewspaperChange = (selectedOptions) => {
    setSelectedNewspapers(selectedOptions || []);
  };

  const [billData, setBillData] = useState({
    name: "",
    month: "",
    date: "",
    googlePay: "8793274753",
    phonePay: "",
    balance: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillData({
      ...billData,
      [name]:
        name === "amount" || name === "balance" ? parseFloat(value) : value,
    });
  };

  const formattedDate = billData.date
    ? format(new Date(billData.date), "dd/MM/yyyy")
    : "";

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const calculateTotal = () => {
    const balance = parseFloat(billData.balance) || 0;
    const totalAmount = newspaperList.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    return totalAmount + balance;
  };

  const handleSubmit = () => {
    if (selectedNewspapers.length > 0 && amount) {
      setNewspaperList((prevList) => [
        ...prevList,
        { newspapers: selectedNewspapers, amount: parseFloat(amount) },
      ]);
      setSelectedNewspapers([]);
      setAmount("");
    }
    setShowSummary(true);
  };

  const shareText = `
  Bill Summary:
  Name: ${billData.name}
  Month: ${billData.month}
  Date: ${formattedDate}
  Newspapers: ${newspaperList
    .map((item) => item.newspapers.map((n) => n.label).join(", "))
    .join("; ")}
  Total Amount: ${calculateTotal().toFixed(2)}
`;

  const shareUrl = window.location.href;

  return (
    <>
      <div>
        <div className="main-container">
          <h1 style={{ color: "#000000" }}>Vijay News Paper Agency</h1>
          <form>
            <div className="row">
              <div className="column">
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={billData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="column">
                <label>Newspaper: </label>
                <Select
                  isMulti
                  options={newspaperOptions}
                  value={selectedNewspapers}
                  onChange={handleNewspaperChange}
                  placeholder="Select Newspapers"
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "#999",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#e6f0ff" : "white",
                      color: "black",
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "white",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#888",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "black",
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: "black",
                    }),
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label>Date: </label>
                <input
                  type="date"
                  name="date"
                  value={billData.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="column">
                <label>Month: </label>
                <select
                  name="month"
                  value={billData.month}
                  onChange={handleInputChange}
                >
                  <option value="">Select Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label>This Month Amount: </label>
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              <div className="column">
                <label>Pre month Balance: </label>
                <input
                  type="number"
                  name="balance"
                  value={billData.balance}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <label>Google Pay: </label>

                <span
                  style={{
                    border: "1px solid #ccc",
                    padding: 5,
                    borderRadius: 5,
                    background: "#fff",
                  }}
                >
                  8793274753
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#6c63ff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                margin: "10px 5px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#574fcf")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6c63ff")}
              onMouseDown={(e) => (e.target.style.backgroundColor = "#453abd")}
              onMouseUp={(e) => (e.target.style.backgroundColor = "#574fcf")}
            >
              Submit
            </button>
            <ReloadButton />
          </form>

          {showSummary && (
            <>
              <div className="share-buttons">
                <WhatsappShareButton url={shareUrl} title={shareText}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </>
          )}
        </div>
        <div style={{ marginTop: 20 }}>
          <GenerateImage
            name={billData.name}
            month={billData.month}
            date={formattedDate}
            newspaper={billData.newspaper}
            selectedNewspapers={newspaperList}
            googlePay={billData.googlePay}
            balance={billData.balance}
            total={calculateTotal().toFixed(2)}
          />
        </div>
      </div>
    </>
  );
};

export default BillTemplate;
