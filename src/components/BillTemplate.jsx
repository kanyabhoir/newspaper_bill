// import "./BillTemplate.css";
// import { useState } from "react";
// import { WhatsappShareButton, WhatsappIcon } from "react-share";
// import GenerateImage from "./GenerateImage";
// import Select from "react-select";

// const newspaperOptions = [
//   "नवभारत",
//   "संदयानंद",
//   "G.M.D.",
//   "E.M.D.",
//   "सामना",
//   "आनंद",
//   "यंती",
//   "मनोरमा",
//   "नवाकाल",
//   "पुढारी",
//   "मातृभूमि",
//   "The Hindu",
//   "साक्षी",
//   "A.B.P.",
//   "B.Line",
//   "B.Std",
//   "दिनकरन",
//   "दिव्या भास्कर",
//   "क. पत्रिका",
//   "दिनमान",
//   "मु. समाचार",
//   "तरुण भारत",
//   "नवशक्ति",
//   "जन्मभूमी",
//   "उदयवाणी",
//   "संध्याकाळ",
//   "दैनिक भास्कर",
//   "Mint",
//   "लोकमत",
//   "H.T.",
//   "सकाळ",
//   "F. Press",
//   "लोकमत",
//   "H.T.",
//   "सकाळ",
//   "F. Press",
// ].map((name) => ({ label: name, value: name }));

// const BillTemplate = () => {
//   const [showSummary, setShowSummary] = useState(false);
//   const [selectedNewspapers, setSelectedNewspapers] = useState([]);

//   const handleNewspaperChange = (selectedOptions) => {
//     setSelectedNewspapers(selectedOptions || []);
//   };
//   const [billData, setBillData] = useState({
//     name: "",
//     month: "",
//     date: "",
//     newspaper: "",
//     amount: 0,
//     googlePay: "",
//     phonePay: "",
//     balance: 0,
//     newspapers: [],
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillData({
//       ...billData,
//       [name]:
//         name === "amount" || name === "balance" ? parseFloat(value) : value,
//     });
//   };

//   const calculateTotal = () => {
//     // const itemTotal = billData.items.reduce(
//     //   (sum, item) => sum + item.quantity * item.price,
//     //   0
//     // );
//     // return billData.amount + billData.balance + itemTotal * 0.1;

//     const amount = parseFloat(billData.amount) || 0;
//     const balance = parseFloat(billData.balance) || 0;
//     return amount + balance;
//   };

//   const handleSubmit = () => {
//     setShowSummary(true);
//   };

//   const shareText = `
//   Bill Summary:
//   Name: ${billData.name}
//   Month: ${billData.month}
//   Date: ${billData.date}
//   Newspaper: ${billData.newspaper}
//   Amount: ${billData.amount}
//   Google Pay: ${billData.googlePay}
//   Phone Pay: ${billData.phonePay}
//   Balance: ${billData.balance}
//   Total Amount: ${calculateTotal().toFixed(2)}
// `;

//   const shareUrl = window.location.href;

//   return (
//     <div className="main-container">
//       <h1>Vijay NewsPepar Agency</h1>
//       <form>
//         <div className="row">
//           <div className="column">
//             <label>Name: </label>
//             <input
//               type="text"
//               name="name"
//               value={billData.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="column">
//             <label>Month: </label>
//             <select
//               name="month"
//               value={billData.month}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Month</option>
//               {[
//                 "January",
//                 "February",
//                 "March",
//                 "April",
//                 "May",
//                 "June",
//                 "July",
//                 "August",
//                 "September",
//                 "October",
//                 "November",
//                 "December",
//               ].map((month) => (
//                 <option key={month} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div className="row">
//           <div className="column">
//             <label>Date: </label>
//             <input
//               type="date"
//               name="date"
//               value={billData.date}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="column">
//             <label>Newspaper: </label>
//             <Select
//               isMulti
//               options={newspaperOptions}
//               value={selectedNewspapers}
//               onChange={handleNewspaperChange}
//               placeholder="Select Newspapers"
//             />
//             {/* <select
//               name="newspaper"
//               value={billData.newspaper}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Newspaper</option>
//               {[
//                 "नवभारत",
//                 "संदयानंद",
//                 "G.M.D.",
//                 "E.M.D.",
//                 "सामना",
//                 "आनंद",
//                 "यंती",
//                 "मनोरमा",
//                 "नवाकाल",
//                 "पुढारी",
//                 "मातृभूमि",
//                 "The Hindu",
//                 "साक्षी",
//                 "A.B.P.",
//                 "B.Line",
//                 "B.Std",
//                 "दिनकरन",
//                 "दिव्या भास्कर",
//                 "क. पत्रिका",
//                 "दिनमान",
//                 "मु. समाचार",
//                 "तरुण भारत",
//                 "नवशक्ति",
//                 "जन्मभूमी",
//                 "उदयवाणी",
//                 "संध्याकाळ",
//                 "दैनिक भास्कर",
//                 "Mint",
//                 "लोकमत",
//                 "H.T.",
//                 "सकाळ",
//                 "F. Press",
//                 "लोकमत",
//                 "H.T.",
//                 "सकाळ",
//                 "F. Press",
//               ].map((newspaper) => (
//                 <option key={newspaper} value={newspaper}>
//                   {newspaper}
//                 </option>
//               ))}
//             </select> */}
//           </div>
//         </div>
//         <div className="row">
//           <div className="column">
//             <label> Month Amount: </label>
//             <input
//               type="number"
//               name="amount"
//               value={billData.amount}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="column">
//             <label>Google Pay: </label>
//             <span  style={{
//                     fontSize: 13,
//                     marginRight: 30,
//                     fontWeight: "bold",
//                     fontFamily: "sans-serif",
//                     color: "#000",
//                     border:"1px solid #ccc",
//                     borderRadius:5,
//                     padding:7

//                   }}>8793274753</span>
//           </div>
//         </div>
//         <div className="row">
//           {/* <div className="column">
//             <label>Phone Pay: </label>
//             <input
//               type="text"
//               name="phonePay"
//               value={billData.phonePay}
//               onChange={handleInputChange}
//             />
//           </div> */}
//           <div className="column">
//             <label>Pre month Balance: </label>
//             <input
//               type="number"
//               name="balance"
//               value={billData.balance}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>

//       {showSummary && (
//         <>
//           <div className="share-buttons">
//             <WhatsappShareButton url={shareUrl} title={shareText}>
//               <WhatsappIcon size={32} round />
//             </WhatsappShareButton>
//           </div>
//           <div>
//             <GenerateImage
//               name={billData.name}
//               month={billData.month}
//               date={billData.date}
//               newspaper={billData.newspaper}
//               selectedNewspapers={selectedNewspapers}
//               amount={billData.amount}
//               googlePay={billData.googlePay}
//               balance={billData.balance}
//               total={calculateTotal().toFixed(2)}
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default BillTemplate;

import "./BillTemplate.css";
import { useState } from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import GenerateImage from "./GenerateImage";
import Select from "react-select";

const newspaperOptions = [
  "नवभारत",
  "संदयानंद",
  "G.M.D.",
  "E.M.D.",
  "सामना",
  "आनंद",
  "यंती",
  "मनोरमा",
  "नवाकाल",
  "पुढारी",
  "मातृभूमि",
  "The Hindu",
  "साक्षी",
  "A.B.P.",
  "B.Line",
  "B.Std",
  "दिनकरन",
  "दिव्या भास्कर",
  "क. पत्रिका",
  "दिनमान",
  "मु. समाचार",
  "तरुण भारत",
  "नवशक्ति",
  "जन्मभूमी",
  "उदयवाणी",
  "संध्याकाळ",
  "दैनिक भास्कर",
  "Mint",
  "लोकमत",
  "H.T.",
  "सकाळ",
  "F. Press",
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
    googlePay: "",
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

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // const addNewspaperToList = () => {

  // };

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
  Date: ${billData.date}
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
          <h1>Vijay NewsPaper Agency</h1>
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
                <input
                  type="text"
                  name="googlePay"
                  value={billData.googlePay}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
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
        <div style={{marginTop:20}}>
          <GenerateImage
            name={billData.name}
            month={billData.month}
            date={billData.date}
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
