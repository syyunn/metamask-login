export const Greeter = (name: string) => `Hello ${name}`;
export const CheckMetamaskInstalled = () => {
    if (!(window as any).ethereum) {
        console.log("Please install MetaMask first.")
        window.alert('Please install MetaMask first.');
        return;
    }
}
