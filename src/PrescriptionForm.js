/* global React */

function generateOptions(start, end, stepSize, numType) {
  const values = []
  for (let i = start; i <= end; i += stepSize) {
    const num =
      numType === "float" ? parseFloat(i).toFixed(2) : `00${i}`.slice(-3)
    values.push(num)
  }
  const options = values.map(value => (
    <option key={value} value={value}>
      {value}
    </option>
  ))
  return options
}

function setEye(state, setState, key, value) {
  const tempState = { ...state }
  tempState[key] = value
  setState(tempState)
}

export function PrescriptionForm({
  setFile,
  file,
  leftEye,
  setLeftEye,
  rightEye,
  setRightEye,
}) {
  return (
    <div className="prescription-form">
      <div className="group">
        <div className="h4">Right Eye (OD)</div>
        <div className="h4">Left Eye (OS)</div>
      </div>

      <div className="group">
        <div>
          <label htmlFor="RightSPH" aria-label="SPH for Right eye">
            <span>SPH</span>
            <select
              id="RightSPH"
              onChange={e =>
                setEye(rightEye, setRightEye, "SPH", e.target.value)
              }
            >
              <option default value="">
                {" "}
              </option>
              {generateOptions(-20.0, 20.0, 0.25, "float")}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="LeftSPH" aria-label="SPH for Left eye">
            <span>SPH</span>
            <select
              id="LeftSPH"
              onChange={e => setEye(leftEye, setLeftEye, "SPH", e.target.value)}
            >
              <option default value="">
                {" "}
              </option>
              {generateOptions(-20.0, 20.0, 0.25, "float")}
            </select>
          </label>
        </div>
      </div>

      <div className="group">
        <div>
          <label htmlFor="RightCYL">
            <span>CYL</span>
            <select
              id="RightCYL"
              aria-label="CYL for Right eye"
              onChange={e =>
                setEye(rightEye, setRightEye, "CYL", e.target.value)
              }
            >
              <option default value="">
                {" "}
              </option>
              {generateOptions(-20.0, 20.0, 0.25, "float")}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="LeftCYL">
            <span>CYL</span>
            <select
              id="LeftCYL"
              aria-label="CYL for Left eye"
              onChange={e => setEye(leftEye, setLeftEye, "CYL", e.target.value)}
            >
              <option default value="">
                {" "}
              </option>
              {generateOptions(-20.0, 20.0, 0.25, "float")}
            </select>
          </label>
        </div>
      </div>

      <div className="group">
        <div>
          <label htmlFor="RightAxis">
            <span>Axis</span>
            <select
              id="RightAxis"
              aria-label="Axis for Right eye"
              onChange={e =>
                setEye(rightEye, setRightEye, "Axis", e.target.value)
              }
            >
              <option default value="">
                {" "}
              </option>
              <option value="blank/0">blank/0</option>
              {generateOptions(1, 180, 1)}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="LeftAxis">
            <span>Axis</span>
            <select
              id="LeftAxis"
              aria-label="Axis for Left eye"
              onChange={e =>
                setEye(leftEye, setLeftEye, "Axis", e.target.value)
              }
            >
              <option default value="">
                {" "}
              </option>
              <option value="blank/0">blank/0</option>
              {generateOptions(1, 180, 1)}
            </select>
          </label>
        </div>
      </div>

      <div className="group">
        <div>
          <label htmlFor="RightAdd">
            <span>Add</span>
            <select
              id="RightAdd"
              aria-label="Add for Right eye"
              onChange={e =>
                setEye(rightEye, setRightEye, "Add", e.target.value)
              }
            >
              <option default value="">
                {" "}
              </option>
              {generateOptions(0.25, 3.5, 0.25, "float")}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="LeftAdd">
            <span>Add</span>
            <select
              id="LeftAdd"
              aria-label="Add for Left eye"
              onChange={e => setEye(leftEye, setLeftEye, "Add", e.target.value)}
            >
              <option default value="">
                {" "}
              </option>
              {generateOptions(0.25, 3.5, 0.25, "float")}
            </select>
          </label>
        </div>
      </div>

      <div className="group">
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="RightPD">
            Pupilary Distance <span>Right</span>
          </label>
          <select
            id="RightPD"
            aria-label="PD for Right eye"
            onChange={e => setEye(rightEye, setRightEye, "PD", e.target.value)}
          >
            <option default value="">
              {" "}
            </option>
            {generateOptions(40, 75, 0.5, "float")}
          </select>
        </div>

        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="LeftPD">
            Pupilary Distance <span>Left</span>
          </label>
          <select
            id="LeftPD"
            aria-label="PD for Left eye"
            onChange={e => setEye(leftEye, setLeftEye, "PD", e.target.value)}
          >
            <option default value="">
              {" "}
            </option>
            {generateOptions(40, 75, 0.5, "float")}
          </select>
        </div>
      </div>

      <div className="file-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="PrescriptionPhoto" className="h4">
          OR UPLOAD A PHOTO OF YOUR PRESCRIPTION
        </label>
        <div className="file-input-wrapper">
          <button type="button" className="btn">
            CHOOSE FILE
          </button>
          <input
            id="PrescriptionPhoto"
            type="file"
            accept="image/*,.pdf"
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <p>{file?.name ? file.name : "No file selected"}</p>
    </div>
  )
}
