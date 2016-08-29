tinymce.PluginManager.add('ionichyperlink', function (editor) {
    var HYPERLINK_BUTTON = "\n    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACQFBMVE\n    X///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz\n    MzMzMzMzP5c3bcAAAAv3RSTlMAAQIDBAUGBwgJCgsMDQ4PERIVFhcYGRocHyAiIyQlJygpKywtLi\n    8wMTI0Njc5Ojs9QUJERUZHSElLTU9QUVJTVFVWWVpbXV5gYmNmZ2hpamxtbm9xcnV3eHp7fX5/gY\n    KDhIWIiouMjY6PkJWWl5mam56gpKanqKmrrK2ur7CxtLa3uLm6u7y9vr/FxsfIycrLzM3Oz9DR0t\n    PU1dbX2dre3+Dh4uPk5efo6err7O3u7/Dx8vP09fb3+Pn6+/z9/sMO078AAAVSSURBVHgBxdh7W1\n    PZHcXxdZIwDQmXIWArTGGGgQ5TBC+KolW0KiqgLaiotVRbguJFS6vVgggWRVFsrUpB5CKIoCioKA\n    UFgay3No+PD+jZScg+SfbJ5w18f/+uHxSzf5ua5EBE2NYcrLk16CHJ2TdPLv3ulzCTtvLsCAWP/1\n    ZggTmSq4foU/dvNagX435Pv9p/A8UsJcNc1J10qLSsnYG83QB1dkwxsLk/QBGtknIuRkMFRz1l3X\n    Eg/Ja0UV6tgn4vjaiIcJ+eArP7ookMs/uiVtP7onxT+s87RulHh6a6P1iVEwfA+f2GqjH6sENtv3\n    OdhgUx5RP08timsD9WZoVORh+9rFbXf5QGUfx1ik4r67d8DW9xvRT0q+pf+Qq+fDdOQYbqvuAABY\n    fN7cM5Sr0m5X1BJfU6TO5jI/VemNxHGvU8NnP7sE5Rb6nyvqCTetkm99FOvSyT+xilXmJw/dbavY\n    W7ineX7jt1d8ZQ3069DxqC4FxvwwLHqopr07J95FJvAGGRcsEj10c19W4jTLJbpfrop14dwsYKCX\n    kUHIGpLA8o+AGmKqGgH6b65iUF1QhWQsbaovKdeZkuDdLiuilagSDEbjnfP8V5M21/WW6FDNtVio\n    YtMCqlrHmaolcXt1oC9+vo5TgMSqv10LeuzUH0xxJgyM//OkP/7ucv2r9Eb4dgRLx7kou74TLWH7\n    LDgOynDGggy0ifRTBg+ztKmNxmoN9pgTTNTUluzUe/nj5MZEFaTCOl7Ycoqj7UH5Wrg/ImU6X6PG\n    yg/5BGNAv9y/TlH8r6nI6S6P/HrqxP/hi43+lS2GdhhPtc/rnfEHK/i37M9jWeOF3TMEIvs47w9R\n    P99OdaiuPxSXrla+rdU99vSscXYitmdcflqu4/y4dg9Ut+dnK+36iof+8X8JJ8k/PORSvuX46GD9\n    qecX40mI+w9bvpS50NvtlzSo8VZdoi1RdEXQm1nxRS/yvlfVtm0bHSHHvE+vmD/Gh8jwYfnP8Kud\n    +zaD/6HOfdTIaXpf9T3MdJfvZqLQT5z1T3c+f4hbnKeHwhvYmq+7hHvbfudHwSX9wyF3J/SaC+Y5\n    ZeRhpqTp9o7JslQ+/3BuhjOSUo7KMwwn38qLAf3Ra4j6hpZX2tVqIPNKvq409SfaROUl6Hgf4Wj1\n    Qf2E9pDTGQljUp0Tc41f+sQZqlc7G+YNskJUxuhQFFBvpA1gADepIFA+xDAfoC1w0ubuJoLIw4FL\n    gvyL9P/z6cSYIhCWMyfcHmLvrmqU2FQcfl+gLL1ouvKZpuLkuBUZZhiq7aIMO6wt0+w3lT/ee3xC\n    IIKyjqjoM0zZWZt7O8aG1GAoJVTcHLb2CqfgpKYKofKHhggamOUJAHCVaETR31+uX2X2s2wuQ29a\n    ql+qTnQgrCYoB6uXJ9ktPXKlY5sMC23okgaB+oZ5fqz5u5e2pf6e7iXYV7a28tQTASqTcq3Rf0BN\n    dHFvXaTe4jm3qdQfaTEKSl1JuymtuHzUO9NOV9wQvqbTTe7w6ljw7qVZrcRxP1Rp3m9vFHCg4Y7C\n    ciNL+iYPw7xX3REwp64+Dt6xZVfZyh6Ho8RGmP6EtXGPpYTy99GdCxlo2p6+NnT+llojwGC7R1nV\n    TYB0row1jVhu+dAOJyqgaptg9rD/0Y7XhOv7pcCJdNDMJDF8Ln3xHu49fvzO6LtpveF7kj3IfWSH\n    n/dSH8Ytoo65/RUMFZTzlHNaihHfEwsPeFUKfg/wykfRlUyrzPRQ2XWKDYpgf06707Bupp23ro01\n    B1MsxhKfj7AAUjZ1dqMFPq7y8PvpklSc/grZqDa2yICEdS6rd2qPUTe2YaYZpcqMYAAAAASUVORK\n    5CYII=\n  ".replace(/\s/g, '');
    editor.addButton('ionichyperlink', {
        icon: true,
        image: HYPERLINK_BUTTON,
        tooltip: 'Insert Link',
        onclick: function () {
            var TextBox = tinymce.ui.TextBox;
            var text = new TextBox({
                label: 'Link Text:',
                name: 'text',
                placeholder: 'Google'
            });
            var url = new TextBox({
                label: 'Link URL:',
                name: 'url',
                placeholder: 'https://www.google.com'
            });
            var popup = editor.windowManager.open({
                width: 480,
                height: 160,
                title: 'Insert a Hyperlink',
                body: [text, url]
            });
            popup.on('submit', function (event) {
                var _a = event.data, text = _a.text, url = _a.url;
                var anchor = "\n          <a href=\"#\" onclick=\"window.open('" + url + "', '_system')\">\n            " + text + "\n          </a>\n        ";
                tinymce.activeEditor.insertContent(anchor);
                tinymce.activeEditor.windowManager.close();
            });
        }
    });
});
