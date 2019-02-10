# workshop-oop-weather

## Usage
In console:
```
weather --service metaweather moscow
```

In code:
```js
import { Weather } from '...weather'

const app = new Weather();
const report = await app.fetchReport('london');
```
