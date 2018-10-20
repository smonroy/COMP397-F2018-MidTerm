module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private _speed:number;
        private _level:number;
        private _xOffset:number;

        // public properties

        // constructor
        constructor(level:number = 1, xOffset:number = 0) {
            super("ocean");
            this._level = level;
            this._xOffset = xOffset;
            switch(this._level) {
                case 2:
                case 3:
                this.rotation = -90;
                break;
            }
            this.Start();
        }

        // private methods
        private _checkBounds():void {
            switch(this._level) {
                case 1:
                if(this.y >=0) {
                    this.Reset();
                }
                break;
                case 2:
                if(this.x <= -960 + this._xOffset) {
                    this.Reset();
                }
                break;
                case 3:
                if(this.x >=0 + this._xOffset) {
                    this.Reset();
                }
                break;
            }
            
        }

        private _move():void {
            switch(this._level) {
                case 1:
                this.y += this._speed;
                break;
                case 2:
                this.x -= this._speed;
                break;
                case 3:
                this.x += this._speed;
                break;
            }
        }

        // public methods

        public Reset(): void {
            switch(this._level) {
                case 1:
                this.y = -960;
                break;
                case 2:
                this.x = 0 + this._xOffset;
                this.y = 480;
                break;
                case 3:
                this.x = -960 + this._xOffset;
                this.y = 480;
                break;
            }
        }        
        
        public Start(): void {
            this.Reset();
            this._speed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}