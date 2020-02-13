import { CheckMetamaskInstalled } from '../index';

window.alert = jest.fn();

test('Check Metamask Installed..', () => {
    CheckMetamaskInstalled()
    console.log(window.alert)
})