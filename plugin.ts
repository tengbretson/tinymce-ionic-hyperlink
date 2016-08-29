declare const tinymce;

tinymce.PluginManager.add('ionichyperlink', editor => {
  const HYPERLINK_BUTTON = `
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACQFBMVE
    X///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz
    MzMzMzMzP5c3bcAAAAv3RSTlMAAQIDBAUGBwgJCgsMDQ4PERIVFhcYGRocHyAiIyQlJygpKywtLi
    8wMTI0Njc5Ojs9QUJERUZHSElLTU9QUVJTVFVWWVpbXV5gYmNmZ2hpamxtbm9xcnV3eHp7fX5/gY
    KDhIWIiouMjY6PkJWWl5mam56gpKanqKmrrK2ur7CxtLa3uLm6u7y9vr/FxsfIycrLzM3Oz9DR0t
    PU1dbX2dre3+Dh4uPk5efo6err7O3u7/Dx8vP09fb3+Pn6+/z9/sMO078AAAVSSURBVHgBxdh7W1
    PZHcXxdZIwDQmXIWArTGGGgQ5TBC+KolW0KiqgLaiotVRbguJFS6vVgggWRVFsrUpB5CKIoCioKA
    UFgay3No+PD+jZScg+SfbJ5w18f/+uHxSzf5ua5EBE2NYcrLk16CHJ2TdPLv3ulzCTtvLsCAWP/1
    ZggTmSq4foU/dvNagX435Pv9p/A8UsJcNc1J10qLSsnYG83QB1dkwxsLk/QBGtknIuRkMFRz1l3X
    Eg/Ja0UV6tgn4vjaiIcJ+eArP7ookMs/uiVtP7onxT+s87RulHh6a6P1iVEwfA+f2GqjH6sENtv3
    OdhgUx5RP08timsD9WZoVORh+9rFbXf5QGUfx1ik4r67d8DW9xvRT0q+pf+Qq+fDdOQYbqvuAABY
    fN7cM5Sr0m5X1BJfU6TO5jI/VemNxHGvU8NnP7sE5Rb6nyvqCTetkm99FOvSyT+xilXmJw/dbavY
    W7ineX7jt1d8ZQ3069DxqC4FxvwwLHqopr07J95FJvAGGRcsEj10c19W4jTLJbpfrop14dwsYKCX
    kUHIGpLA8o+AGmKqGgH6b65iUF1QhWQsbaovKdeZkuDdLiuilagSDEbjnfP8V5M21/WW6FDNtVio
    YtMCqlrHmaolcXt1oC9+vo5TgMSqv10LeuzUH0xxJgyM//OkP/7ucv2r9Eb4dgRLx7kou74TLWH7
    LDgOynDGggy0ifRTBg+ztKmNxmoN9pgTTNTUluzUe/nj5MZEFaTCOl7Ycoqj7UH5Wrg/ImU6X6PG
    yg/5BGNAv9y/TlH8r6nI6S6P/HrqxP/hi43+lS2GdhhPtc/rnfEHK/i37M9jWeOF3TMEIvs47w9R
    P99OdaiuPxSXrla+rdU99vSscXYitmdcflqu4/y4dg9Ut+dnK+36iof+8X8JJ8k/PORSvuX46GD9
    qecX40mI+w9bvpS50NvtlzSo8VZdoi1RdEXQm1nxRS/yvlfVtm0bHSHHvE+vmD/Gh8jwYfnP8Kud
    +zaD/6HOfdTIaXpf9T3MdJfvZqLQT5z1T3c+f4hbnKeHwhvYmq+7hHvbfudHwSX9wyF3J/SaC+Y5
    ZeRhpqTp9o7JslQ+/3BuhjOSUo7KMwwn38qLAf3Ra4j6hpZX2tVqIPNKvq409SfaROUl6Hgf4Wj1
    Qf2E9pDTGQljUp0Tc41f+sQZqlc7G+YNskJUxuhQFFBvpA1gADepIFA+xDAfoC1w0ubuJoLIw4FL
    gvyL9P/z6cSYIhCWMyfcHmLvrmqU2FQcfl+gLL1ouvKZpuLkuBUZZhiq7aIMO6wt0+w3lT/ee3xC
    IIKyjqjoM0zZWZt7O8aG1GAoJVTcHLb2CqfgpKYKofKHhggamOUJAHCVaETR31+uX2X2s2wuQ29a
    ql+qTnQgrCYoB6uXJ9ktPXKlY5sMC23okgaB+oZ5fqz5u5e2pf6e7iXYV7a28tQTASqTcq3Rf0BN
    dHFvXaTe4jm3qdQfaTEKSl1JuymtuHzUO9NOV9wQvqbTTe7w6ljw7qVZrcRxP1Rp3m9vFHCg4Y7C
    ciNL+iYPw7xX3REwp64+Dt6xZVfZyh6Ho8RGmP6EtXGPpYTy99GdCxlo2p6+NnT+llojwGC7R1nV
    TYB0row1jVhu+dAOJyqgaptg9rD/0Y7XhOv7pcCJdNDMJDF8Ln3xHu49fvzO6LtpveF7kj3IfWSH
    n/dSH8Ytoo65/RUMFZTzlHNaihHfEwsPeFUKfg/wykfRlUyrzPRQ2XWKDYpgf06707Bupp23ro01
    B1MsxhKfj7AAUjZ1dqMFPq7y8PvpklSc/grZqDa2yICEdS6rd2qPUTe2YaYZpcqMYAAAAASUVORK
    5CYII=
  `.replace(/\s/g, '');

  editor.addButton('ionichyperlink', {
    icon: true,
    image: HYPERLINK_BUTTON,
    tooltip: 'Insert Link',
    onclick() {
      const { TextBox } = tinymce.ui;
      
      const text = new TextBox({
        label: 'Link Text:',
        name: 'text',
        placeholder: 'Google'
      });

      const url = new TextBox({
        label: 'Link URL:',
        name: 'url',
        placeholder: 'https://www.google.com'
      });
      
      const popup = editor.windowManager.open({
        width: 480,
        height: 160,
        title: 'Insert a Hyperlink',
        body: [ text, url ]
      });
      
      popup.on('submit', event => {
        const { text, url }: { text: string, url: string } = event.data;
        const anchor = `
          <a href="#" onclick="window.open('${url}', '_system')">
            ${text}
          </a>
        `;
        tinymce.activeEditor.insertContent(anchor);
        tinymce.activeEditor.windowManager.close();
      });
    }
  });
});