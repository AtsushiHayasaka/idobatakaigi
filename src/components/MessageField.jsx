import React, { useState } from 'react';
import { TextField } from '@material-ui/core'

const MessageField = ({name, setText, text}) => { 
  console.log({text});
  const [isComposed, setIsComposed] = useState(false);
  console.log(isComposed)
  

  return (
    <TextField  
      fullWidth={true}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      onChange={e => setText(e.target.value)}
      value={text}
      onKeyDown={(e) => {
        if(isComposed === true | e.target.value === "") return;
        if(e.key === "Enter") {
          console.log('push message to firebase');
          e.preventDefault();
          setText('');
        }
      }}
      />)
}

export default MessageField;

/**
 * やること
 * ボタン押すと、setText発火　→　textに文字列登録
 * ☆条件
 * 編集中にenterを押しても、おささらない（編集中かどうかをinComposedで管理）
 * 
 */