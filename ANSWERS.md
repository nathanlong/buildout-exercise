# Answers


## Front-End Tooling

### Build Tools

To help make this process efficient, I attached a very simple static
prototyping kit I assembled. Powered by `gulp` it adds:

* Local development previews via the LiveServer module with hot reloading
* Sass, with auto-prefixing and minification
* Simple static includes, allowing modularization and reuse
* Build process allowing easy CI integration

Everything in this kit was written by me, including the gulp tasks, svg
spriting system, local server setup, etc.

If you wish to run the kit locally:

1. `cd` into the repo
2. `npm install` to grab the modules (requires Node 14+)
3. `gulp` to run development task (requires gulp-cli install globally)
4. `gulp build` to run build tasks (minifies assets)

**Folder Structure**

`source` - all source assets (HTML, CSS, JS) go in here, yo

`build` - all compiled assets are dumped here for packaging/hosting

`source/static` - All folders and files in this folder will be moved to the
build folder to allow a consistent sourcing path (allows absolute urls from
the root of the build folder)

`source/html` - Houses all HTML before piped through the `gulp-include`
module.


### Static Hosting

For review in this demo, I've connected the git repo to Netlify. Nothing
special, it's just for ease of review:

https://nathan-long-buildout-exercise.netlify.app/

### Frameworks (or Lack Thereof)

In the spirit of the second bullet point of the 'General' section of
instructions, I've chosen to not utilize a standard framework (like Bootstrap)
and create the interactions manually in JavaScript. I used jQuery for speed of
DOM manipulation, but could rewrite in vanilla JS if required. 

---

## Explanations

Techniques used:

### Flexbox

In a few years, no one will even remember floats and clearing techniques! With
the simplicity of this layout, flexbox was a good layout candidate and will be
familiar with anyone who uses Bootstrap. I modeled my 'grid' after Bootstrap
5's grid implementation -- just micro-sized for this demo.

### object-fit

The hero component easily lent itself to filling half the allotted space
edge-to-edge.  Rather than using the older background image / background-size
declarations which require use of a `<style>` block for dynamic assignment (if
pulling data from a CMS) in the template, use object-fit to allow a slightly
cleaner `<img>` tag output, and handle the rest with css. This also means we
can leverage responsive images with srcset for smarter image loading (see
'Optimization')

If IE11 isn't a support target, this technique will work (source:
https://caniuse.com/object-fit)

### Fluid Type

Similar to using object-fit on the hero image, I used a fluid type declaration
to control the sizing with a calc() function. I feel this works exceptionally
well for large elements, allowing dynamic scaling rather than stair-stepping
it down through fixed breakpoints (and possibly running into strange cases at
weird spots).

I created a mixin to make the application consistent which is based on the
base from https://css-tricks.com/snippets/css/fluid-typography/ along with
a Safari-specific fix (Safari only computes fluid type on initial load when
using viewpoint relative units) from:
https://www.sarasoueidan.com/blog/safari-fluid-typography-bug-fix/

### ADA / Accessibility

Tabs can be a screenreaders nightmare, context can change without notifying the
user and it can be difficult to navigate back to the tab navigation. To
support accessibility on the tabs I've done the following:

* Use relevant aria roles to control screenreader presentation and announcement
  of what the user is entering into.
* Add a 'Return to nav' control that helps screenreaders and reduced mobility
  individuals to more easily return to the content behind the tab menu after
  engaging with the tab content.
* Keep mobile patterns as close to default browser functionality (see
  'scrolloff tab navigation'). By doing this we ensure we're not artificially
  preventing access to hidden items, adjusting the natural tab index or other
  factors that might unintentionally make the controls inaccessible.


### 'Scrolloff' tab navigation

Two common patterns I've seen for mobile tabs controls is what I call the
'Pill Jumble' where the controls start to stack on top of each other
(sometimes resulting in a jumble) or the 'Nav Scrolloff' pattern where the nav
tabs hang over the edge and the user can scroll to access the overflow.

I've created a version of the Scrolloff pattern that utilizes default browser
scrolling functionality. Some pros and cons of this approach:

Benefits:

* Simple and direct
* No scroll hijacking means no altering of default assistive device patterns
  or accessibility concerns
* Preserves default inertia scrolling
* No external dependencies, utilizes only a few measurement and toggle
  functions.

Drawbacks

* The mobile view on a desktop device can be awkward without a trackpad to
  assist in horizontal scrolling. User has to either manually drag the scroll
  or hold SHIFT+scroll


### Optimization / Load-time

The biggest filesize savings can come from optimizing the image included in
the layout. Raw, it clocks in at 792k, with reasonable compression it can be
reduced to 114k (reduction of 85.6%). We can even further reduce this by
generating smaller cuts and loading them in with srcset declarations, letting
the browser select the most optimized version based on browser width and pixel
density.

This brings overall 

If we wanted to take it even further we could enable lazy-loading — load
a micro-sized image and fetch the correct image size after initial load (but
we're verging into micro-optimization territory there for the purposes of this
demo).

---

# Compatibility

Though it wasn't required, this build was tested in:

* Chrome 96.0.4664.45 on OSX
* Safari 14.1.1 on OSX
* Firefox 93.0 on OSX

 

---

## Time Spent

* Setting up repo, tooling, and review instance: 10m
* Creating initial markup: 45m
* Tab functionality and accessibility controls: 70m
* Tweaking grid and mobile layouts: 30m
* Final polish, animation, button hover states: 45m
* Completing answer writeups: 25m

Total time: 225m / 3.75h
