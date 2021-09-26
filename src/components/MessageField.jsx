import React, { useState } from 'react';
import { TextField } from '@material-ui/core'
import { pushMessage } from '../firebase'

const MessageField = ({inputEl, name, setText, text}) => { 
  const [isComposed, setIsComposed] = useState(false);
  
  return (
    <TextField  
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      onChange={e => setText(e.target.value)}
      value={text}
      onKeyDown={(e) => {
        if(isComposed === true | e.target.value === "") return;
        if(e.key === "Enter") {
          pushMessage({name: 'ハムさん', text})
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