```button
name movie
type command
action Projects: Show pj01 > 表格
color purple
```
^button-movie-id
<button class="confetti">Click me!</button>

```dataviewjs
const buttonMaker = (text) => {
  const btn = this.container.createEl('button', {"text": text});
  btn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    party.confetti(evt); // <---- creating confetti
    party.sparkles(evt); // <---- creating sparkles
  });
  return btn;
}

dv.table(["File", "Button"],
	dv.pages('"Dataview"')
    .map(t => [
      t.file.link,
      buttonMaker("Let's start the party!")
    ]
  )
)
```
<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1"/></svg>
- [ ]  📅 2023-12-08