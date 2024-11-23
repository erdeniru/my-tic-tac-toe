import { Component } from 'react';

export class GameLayout extends Component {
    render() {
        return (
            <main className="flex flex-col flex-nowrap">
                <h1 className="block text-center text-4xl font-bold text-gray-700">
                    {this.props.title}
                </h1>
                <div className="flex-1 flex justify-center items-center">
                    <div className="m-[20px] min-w-[320px] max-w-[640px] flex-1 flex flex-col items-center gap-[20px] font-['Geologica', sans-serif] text-2xl">
                        {this.props.children}
                    </div>
                </div>
            </main>
        );
    }
}
