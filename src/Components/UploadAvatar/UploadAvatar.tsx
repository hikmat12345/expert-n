// imports the React Javascript Library
import React, { useRef } from "react";
//Card
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Image from "next/image";

export default function ImageUploadCard(props?: any) {
  //   const styles = (theme:any) => ({
  //     root: {
  //       backgroundColor: "white",
  //       width: 500,
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "flex-end"
  //     },
  //     icon: {
  //       margin: 4
  //     },
  //     iconHover: {
  //       margin: 4,
  //       "&:hover": {

  //       }
  //     },
  //     cardHeader: {
  //       textalign: "center",
  //       align: "center",
  //       backgroundColor: "white"
  //     },
  //     input: {
  //       display: "none"
  //     },
  //     title: {
  //       color: "blue",
  //       fontWeight: "bold",
  //       fontFamily: "Montserrat",
  //       align: "center"
  //     },
  //     button: {
  //       color: "blue",
  //       margin: 10
  //     },
  //     secondaryButton: {
  //       color: "gray",
  //       margin: 10
  //     },
  //     typography: {
  //       margin: 4,
  //       backgroundColor: "default"
  //     },

  //     searchRoot: {
  //       padding: "2px 4px",
  //       display: "flex",
  //       alignItems: "center",
  //       width: 400
  //     },
  //     searchInput: {
  //       marginLeft: 8,
  //       flex: 1
  //     },
  //     searchIconButton: {
  //       padding: 10
  //     },
  //     searchDivider: {
  //       width: 1,
  //       height: 28,
  //       margin: 4
  //     }
  //   });
  //   const initState = {
  //     mainState: "initial", // initial, search, gallery, uploaded
  //     imageUploaded: 0,
  //     selectedFile: null
  //   };
  //   const [state, setState]= useState<any>(initState)

  //   const handleUploadClick = (event:any) => {
  //     var file = event.target.files[0];
  //     const reader = new FileReader();
  //     var url = reader.readAsDataURL(file);
  //     reader.onloadend = function() {
  //       setState({
  //         selectedFile: [reader.result]
  //       });
  //     };
  //     setState({
  //       mainState: "uploaded",
  //       selectedFile: event.target.files[0],
  //       imageUploaded: 1
  //     });
  //   };

  //   const renderInitialState=()=> {
  //       const { classes, } = props;
  //       return (
  //         <React.Fragment>
  //           <CardContent>
  //             <Grid>
  //               <input
  //                 accept="image/*"
  //                 className={classes}
  //                 id="contained-button-file"
  //                 multiple
  //                 type="file"
  //                 onChange={handleUploadClick}
  //               />
  //               <label htmlFor="contained-button-file">
  //                 <Fab component="span" className={classes}>
  //                   <Avatar>H</Avatar>
  //                 </Fab>
  //               </label>

  //             </Grid>
  //           </CardContent>
  //         </React.Fragment>
  //       );
  //    }

  //   const handleAvatarClick =(value:any) =>{
  //     var filename = value.url.substring(value.url.lastIndexOf("/") + 1);
  //     console.log(filename);
  //     setState({
  //       mainState: "uploaded",
  //       imageUploaded: true,
  //       selectedFile: value.url,
  //       fileReader: undefined,
  //       filename: filename
  //     });
  //   }

  //   const imageResetHandler = (event:any) => {
  //       setState({
  //         mainState: "initial",
  //         selectedFile: null,
  //         imageUploaded: 0
  //       });
  //     };

  //     const renderUploadedState=()=> {
  //         return (
  //           <React.Fragment>
  //             <CardActionArea onClick={imageResetHandler}>
  //               <img
  //                 width="100%"
  //                 src={state.selectedFile}
  //               />
  //             </CardActionArea>
  //           </React.Fragment>
  //         );
  //       }

  // const { classes,   } = props;
  //  return (
  //     <React.Fragment>
  //       <div style={classes}>
  //         <Card className={props.cardName}>
  //           {(state.mainState == "initial" && renderInitialState()) ||
  //            (state.mainState == "uploaded" &&
  //               renderUploadedState())}
  //         </Card>
  //       </div>
  //     </React.Fragment>
  //  );

  const AvatarWrapper = styled.div`
    position: relative;
    height: 105px;
    width: 105px;
    margin: 23px auto 1px auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 15px -5px black;
    transition: all 0.3s ease;
  `;

  const UploadButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    border: none;
    padding: 0px;
  `;
  const Input = styled.input`
    position: relative;
    height: 130px;
    width: 130px;
    margin: 133px auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 15px -5px black;
    transition: all 0.3s ease;
  `;

  const reference = useRef<any>(null);

  return (
    <AvatarWrapper>
      <UploadButton
        type="button"
        onClick={() => reference.current.click()}
        className="upload-button"
      >
        {props.imgLink ? (
          <Image
            alt="Avatar Image"
            style={{ transition: "all 0.3s ease", border: "12px" }}
            layout="fill"
            objectFit="contain"
            src={props.imgLink}
          />
        ) : (
          <div style={{ margin: "auto", display: "block" }}>
            <Avatar
              style={{ width: "100%", height: "100%" }}
              src="/assets/images/avatar.png"
            />
          </div>
        )}
        {/* <Image src="" /> */}
      </UploadButton>

      <Input
        ref={reference}
        onChange={props.changeFile}
        className="file-upload"
        type="file"
        accept="image/jpeg, image/png, image/jpg"
      />
    </AvatarWrapper>
  );
}

// export default ImageUploadCard;
