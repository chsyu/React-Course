export default function Header() {
    return (
        <header className="text-center d-flex row flex-column">
            <h2 className="text-white pt-5 pb-2">
                NORDIC NEST Shopping Cart
            </h2>

            <p
                className="text-light opacity-3 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                An example made by Create-React-App.
            </p>
            <div className="flex mt-6 justify-center">
                <hr className="hr-header-line rounded" />
            </div>
        </header>
    );

}