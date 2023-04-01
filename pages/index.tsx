import { useState } from 'react';
import {
    ChevronForward,
    Compass,
    Sparkles,
} from '@styled-icons/ionicons-solid';
import {
    IconSpan,
    IconAnchor,
    IconNextLink,
} from '../src/icon-tools';
import { SegmentedControl } from '../src/segmented-control';
import { ColorfulSlider } from '../src/slider';

const App = () => {
    const [sliderValue, setSliderValue] = useState(10);
    return (
        <main>
            <h1>Gallery</h1>
            <section>
                <h2>icon-tools</h2>
                <section>
                    <h3>
                        <code>IconSpan</code>
                    </h3>
                    <p>
                        <IconSpan LeftIcon={Sparkles}>Sparkles</IconSpan>
                    </p>
                </section>
                <section>
                    <h3>
                        <code>IconAnchor</code>
                    </h3>
                    <p>
                        <IconAnchor
                            LeftIcon={Compass}
                            href='https://hideo54.com'
                        >
                            hideo54.com
                        </IconAnchor>
                    </p>
                </section>
                <section>
                    <h3>
                        <code>IconNextLink</code>
                    </h3>
                    <p>
                        <IconNextLink
                            RightIcon={ChevronForward}
                            href='/hello'
                        >
                            hello
                        </IconNextLink>
                    </p>
                </section>
            </section>
            <section>
                <h2>segmented-control</h2>
                <section>
                    <h3>
                        <code>SegmentedControl</code>
                    </h3>
                    <div>
                        <SegmentedControl
                            id='sample'
                            value='apple'
                            options={[
                                { id: 'apple', name: 'Apple' },
                                { id: 'banana', name: 'Banana' },
                                { id: 'caveats', name: 'Caveats' },
                            ]}
                            color='#123456'
                        />
                    </div>
                </section>
            </section>
            <section>
                <h2>slider</h2>
                <section>
                    <h3>
                        <code>ColorfulSlider</code>
                    </h3>
                    <div>
                        <ColorfulSlider
                            color='#789abc'
                            value={sliderValue}
                            min={0}
                            max={100}
                            onChange={e =>
                                setSliderValue(e.target.valueAsNumber)
                            }
                        />
                    </div>
                </section>
            </section>
        </main>
    );
};

export default App;
