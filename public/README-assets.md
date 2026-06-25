# Assets to add

Drop these files into the `/public` folder and they'll appear automatically:

| File                 | Where it shows        | Notes                                                        |
| -------------------- | --------------------- | ------------------------------------------------------------ |
| `hero.gif`           | Fullscreen hero       | Your front-page GIF. See performance note below.             |
| `portrait.jpg`       | About section         | A 4:5 portrait of you works best.                            |
| `work/your-film.jpg` | Work grid thumbnails  | 16:9 thumbnails. Then reference them in `lib/projects.ts`.   |

## Performance note on the hero GIF

GIFs are huge (often 10–50 MB) and can make the page load slowly. If you can,
export your clip as an **MP4** instead — it's ~10× smaller and looks sharper.

To use an MP4, open `components/Hero.tsx` and swap the `<img>` for:

```tsx
<video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  poster="/hero-poster.jpg"
>
  <source src="/hero.mp4" type="video/mp4" />
</video>
```

The GIF will work out of the box — this is just the faster option when you're ready.
