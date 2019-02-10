# workshop-oop-weather

## Usage
In console:
```
weather 127.0.0.1
```

In code:
```js
import { Weather } from '...weather'

const app = new Weather();
const report = await app.fetchReport('london');
```
