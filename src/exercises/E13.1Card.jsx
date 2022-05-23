import React from "react";

export default function E131({ userInput, myAvatarArr }) {
  console.log(myAvatarArr);
  let filterAvatars = () => {
    return myAvatarArr.filter((avatar) => {
      return avatar.nameFull.includes(userInput);
    });
  };
  let insertArray = () => {
    const filteredAvatars = filterAvatars();
    return filteredAvatars.map((avatar) => {
      return (
        <div key={avatar.nameFull}>
          {avatar.nameFull}
          <img src={avatar.img} alt='' />
        </div>
      );
    });
  };
  let filterArray = () => {};

  return <div>{insertArray()}</div>;
}
