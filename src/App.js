import { useRef, useState, Fragment, useEffect } from "react";
import * as XLSX from "xlsx";
import Loader from "react-loader-spinner";
import CheckboxList from "./components/UI/CheckboxList";
import Button from "./components/UI/Button";
import ContactDetails from "./components/ContactDetails";
import "./App.css";

function App() {
  const [paraData, setParaData] = useState();
  const [inputLabel, setInputLabel] = useState("Click Here...");
  const [loading, setLoading] = useState(false);
  const [excelColumnList, setExcelColumnList] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const fileInputRef = useRef();
  const upload = () => {
    const file = fileInputRef.current.files?.[0];
    if (file) {
      const reader = new FileReader();
      const RABS = reader.readAsBinaryString;
      reader.onload = (e) => {
        const bstr = e.target.result;
        const workbook = XLSX.read(bstr, { type: RABS ? "binary" : "array" });
        const wsName = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsName];
        console.log(RABS, workbook);
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        setParaData(data);
      };
      if (RABS) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  };

  const fileInputHandler = (event) => {
    const files = event.target.files;
    setLoading(false);
    if (files.length > 0) {
      setInputLabel(files[0].name);
    }
  };

  const onLabelClick = () => {
    setLoading(true);
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (paraData && paraData.length > 0) {
      const columnList = [...paraData[0]];
      const arrangedColumnList = columnList.map((item, index) => {
        return { name: item, isChecked: false, id: index, isMobileNumber: false };
      });
      setExcelColumnList(arrangedColumnList);
    }
  }, [paraData]);

  const submitListHanlder = (filterColumnList) => {
    const data = [];

    for (let column of filterColumnList) {
      const columnData = { ...column };
      columnData["data"] = [];
      data.push(columnData);
    }

    for (let i = 1; i < paraData.length; i++) {
      for (let column of data) {
        column.data.push(paraData[i][column.id]);
      }
    }
    setColumnsData(data);
  };

  const allowedFileTypes =
    ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";

  return (
    <div className="App">
      <div className="App-header">PC to Mobile Calling APP</div>
      {!paraData && (
        <div>
          <label>Chooese a excel file to read contact numbers</label>
          <br />
          <div className="files">
            <input
              type="file"
              id="fileUpload"
              ref={fileInputRef}
              accept={allowedFileTypes}
              style={{ display: "none" }}
              onChange={fileInputHandler}
            />
            {loading && (
              <Fragment>
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={80}
                  width={80}
                />
                <p>Loading, Please wait...</p>
              </Fragment>
            )}
            {!loading && (
              <label
                htmlFor="fileUpload"
                id="fileUploadLabel"
                onClick={onLabelClick}
              >
                {inputLabel}
              </label>
            )}
            <Button onButtonClick={upload} type="button" value="Upload" />
          </div>
        </div>
      )}
      <div>
        {columnsData.length === 0 && excelColumnList.length > 0 && (
          <CheckboxList
            checkboxList={excelColumnList}
            submitList={submitListHanlder}
          />
        )}
        {columnsData.length > 0 && <ContactDetails data={columnsData} />}
      </div>
    </div>
  );
}

export default App;
