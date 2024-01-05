import React, { useCallback } from "react";
import z from "zod";
import {
  CompositionProps
} from "../types/constants";

const c3d: React.CSSProperties = {
  width: "90%",
  padding: 10,
  boxShadow: "0px 0px 20px 10px #c3c3c3",
  borderRadius: 5,
  color: "black",
};

export const ControlBin: React.FC<{
  inputProps: z.infer<typeof CompositionProps>;
  setNum1: React.Dispatch<React.SetStateAction<number>>;
  setNum2: React.Dispatch<React.SetStateAction<number>>;
  setNum3: React.Dispatch<React.SetStateAction<number>>;
  setNum4: React.Dispatch<React.SetStateAction<number>>;
  setNum5: React.Dispatch<React.SetStateAction<number>>;
  setNum6: React.Dispatch<React.SetStateAction<number>>;
  setNum8: React.Dispatch<React.SetStateAction<number>>;
}> = ({ inputProps, setNum1, setNum2, setNum3, setNum4, setNum5, setNum6, setNum8 }) => { // - { text, setText, inputProps }

  const onChange1: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum1(e.currentTarget.valueAsNumber)}, [setNum1]);
  const onChange2: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum2(e.currentTarget.valueAsNumber)}, [setNum2]);
  const onChange3: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum3(e.currentTarget.valueAsNumber)}, [setNum3]);
  const onChange4: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum4(e.currentTarget.valueAsNumber)}, [setNum4]);
  const onChange5: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum5(e.currentTarget.valueAsNumber)}, [setNum5]);
  const onChange6: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum6(e.currentTarget.valueAsNumber)}, [setNum6]);
  const onChange8: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {setNum8(e.currentTarget.valueAsNumber)}, [setNum8]);
  
  return (
    <div style={c3d}>
      <h3>Background Controls</h3>
      <table>
        <tbody>
          <tr>
            <th>Variable</th>
            <th>Dial</th>
            <th>Value</th>
          </tr>
          {/* Background - Number */}
          <tr>
            <td>Size</td>
            <td>
              <input 
                type="range"
                min={0}
                max={2}
                step={.01}
                disabled={false}
                name="scale1"
                //style={slider}
                value={inputProps.scale1}
                onChange={onChange1}
              />
            </td>
            <td>{inputProps.scale1}</td>
          </tr>
          {/* Background TranslateX - Number */}
          <tr> 
            <td>Horizontal</td>
            <td>
              <input 
                type="range"
                min={-2000}
                max={1000}
                step={10}
                disabled={false}
                name="translatex1"
                //style={slider}
                value={inputProps.translateX1}
                onChange={onChange2}
              />
            </td>
            <td>{inputProps.translateX1}</td>
          </tr>
          {/* Background TranslateY - Number */}
          <tr> 
            <td>Vertical</td>
            <td>
              <input 
                type="range"
                min={-2000}
                max={2000}
                step={10}
                disabled={false}
                name="scale1"
                //style={slider}
                value={inputProps.translateY1}
                onChange={onChange3}
              />
            </td>
            <td>{inputProps.translateY1}</td>
          </tr>
        </tbody>
      </table>
      <h3>My Video Controls</h3>
      <table>
        <tbody>
          <tr>
            <th>Variable</th>
            <th>Dial</th>
            <th>Value</th>
          </tr>
          {/* Background Scale - Number */}
          <tr>
            <td>Size</td>
            <td>
              <input 
                type="range"
                min={0}
                max={2}
                step={.01}
                disabled={false}
                name="scale2"
                //style={slider}
                value={inputProps.scale2}
                onChange={onChange4}
              />
            </td>
            <td>{inputProps.scale2}</td>
          </tr>
          {/* Background TranslateX - Number */}
          <tr>
            <td>Horizontal</td>
            <td>
              <input 
                type="range"
                min={-1500}
                max={1500}
                step={10}
                disabled={false}
                name="translateX2"
                //style={slider}
                value={inputProps.translateX2}
                onChange={onChange5}
              />
            </td>
            <td>{inputProps.translateX2}</td>
          </tr>
          {/* Background TranslateY - Number */}
          <tr>
            <td>Vertical</td>
            <td>
              <input 
                type="range"
                min={-2000}
                max={3000}
                step={10}
                disabled={false}
                name="translateY2"
                //style={slider}
                value={inputProps.translateY2}
                onChange={onChange6}
              />
            </td>
            <td>{inputProps.translateY2}</td>
          </tr>
          {/* OPACITY OF GREEN SCREEN */}
          <tr>
            <td>Green Screen</td>
            <td>
              <input 
                type="range"
                min={0}
                max={1}
                step={.01}
                disabled={false}
                name="opacity"
                //style={slider}
                value={inputProps.gOpacity}
                onChange={onChange8}
              />
            </td>
            <td>{inputProps.gOpacity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
