import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blaskLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blaskLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) 
            return false
        if((target.y === this.cell.y + 1 ) && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true
        }

        return false
    }
}
