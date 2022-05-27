# Camera | how does it work?

## PerspectiveCamera

```bash
This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.
```

Let's see the whole scene. [ renderer.render(scene, camera)]
![perspective](https://media.discordapp.net/attachments/844887689286123532/979820648861945936/unknown.png)

Let's take the newly created camera view as a helper. [ render.render(scene, newcamera) ]
![Orthographic](https://media.discordapp.net/attachments/844887689286123532/979820952332406834/unknown.png)

## OrthographicCamera

```bash
In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera. This can be useful for rendering 2D scenes and UI elements, amongst other things.
```

Let's see the whole scene. [ renderer.render(scene, camera)]
  ![perspective](https://media.discordapp.net/attachments/844887689286123532/979821179634323516/unknown.png)

Let's take the newly created camera view as a helper. [ render.render(scene, newcamera) ]
  ![Orthographic](https://media.discordapp.net/attachments/844887689286123532/979821331711410176/unknown.png)

